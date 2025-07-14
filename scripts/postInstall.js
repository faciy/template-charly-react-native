#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

// Fonction principale
async function createProject() {
  const projectName = process.argv[2];

  if (!projectName) {
    console.log(chalk.red('❌ Veuillez spécifier un nom de projet'));
    console.log(chalk.yellow('Usage: node postInstall.js MonProjet'));
    process.exit(1);
  }

  const projectPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(__dirname, '..', 'template');

  try {
    if (fs.existsSync(projectPath)) {
      console.log(chalk.red(`❌ Le dossier ${projectName} existe déjà.`));
      process.exit(1);
    }

    console.log(chalk.blue(`🚀 Création du projet ${projectName}...`));
    await fs.copy(templatePath, projectPath);

    // Remplacement des variables et noms dans les fichiers
    await replaceVariables(projectPath, projectName);

    // Renommages spécifiques à iOS et Android
    await renameIOSFolder(projectPath, projectName);
    await renameAndroidPackage(projectPath, projectName);
    await renameIOSProjectFiles(projectPath, projectName);
    await renameXCScheme(projectPath, projectName);

    console.log(chalk.green('✅ Projet généré avec succès !'));
    console.log(chalk.yellow('\n📌 Étapes suivantes :'));
    console.log(chalk.cyan(`   cd ${projectName}`));
    console.log(chalk.cyan('   npm install'));
    console.log(chalk.cyan('   npx react-native run-android'));

  } catch (err) {
    console.error(chalk.red('❌ Erreur :'), err);
    process.exit(1);
  }
}

// 🔁 Remplacement des variables et noms dans tous les fichiers
async function replaceVariables(projectPath, projectName) {
  const replacements = {
    '{{PROJECT_NAME}}': projectName,
    '{{PROJECT_NAME_LOWER}}': projectName.toLowerCase(),
    '{{PROJECT_NAME_CAMEL}}': toCamelCase(projectName),
    '{{BUNDLE_ID}}': `com.votrenom.${projectName.toLowerCase()}`,
    'AwesomeProject': projectName,
    'awesomeproject': projectName.toLowerCase(),
    'com.awesomeproject': `com.votrenom.${projectName.toLowerCase()}`,
    'org.name.AwesomeProject': `org.name.${projectName}`
  };

  const files = await getFiles(projectPath);

  for (const file of files) {
    if (shouldProcessFile(file)) {
      let content = await fs.readFile(file, 'utf8');

      for (const [key, value] of Object.entries(replacements)) {
        const pattern = new RegExp(key, 'g');
        content = content.replace(pattern, value);
      }

      await fs.writeFile(file, content);
    }
  }
}

// 📁 Renommer le dossier iOS
async function renameIOSFolder(projectPath, projectName) {
  const iosDir = path.join(projectPath, 'ios');
  const oldIOSPath = path.join(iosDir, 'AwesomeProject');
  const newIOSPath = path.join(iosDir, projectName);

  if (await fs.pathExists(oldIOSPath)) {
    await fs.move(oldIOSPath, newIOSPath);
    console.log(chalk.green(`📁 Dossier iOS renommé → ${projectName}`));
  }
}

// 📦 Renommer le package Android
async function renameAndroidPackage(projectPath, projectName) {
  const oldPackage = 'awesomeproject';
  const newPackage = projectName.toLowerCase();

  const javaBasePath = path.join(
    projectPath,
    'android',
    'app',
    'src',
    'main',
    'java',
    'com'
  );
  const oldPath = path.join(javaBasePath, oldPackage);
  const newPath = path.join(javaBasePath, newPackage);

  if (await fs.pathExists(oldPath)) {
    await fs.move(oldPath, newPath);
    console.log(chalk.green(`📁 Package Android renommé → com.${newPackage}`));
  }

  const javaFiles = await getFiles(path.join(projectPath, 'android', 'app', 'src'));
  for (const file of javaFiles) {
    if (file.endsWith('.java') || file.endsWith('.kt')) {
      let content = await fs.readFile(file, 'utf8');
      content = content.replace(new RegExp(`com\\.${oldPackage}`, 'g'), `com.${newPackage}`);
      await fs.writeFile(file, content);
    }
  }
}

// 📂 Renommer les fichiers iOS comme .xcodeproj, .xcworkspace, etc.
async function renameIOSProjectFiles(projectPath, projectName) {
  const iosDir = path.join(projectPath, 'ios');
  const renames = [
    { from: 'AwesomeProject.xcodeproj', to: `${projectName}.xcodeproj` },
    { from: 'AwesomeProject.xcworkspace', to: `${projectName}.xcworkspace` }
  ];

  for (const { from, to } of renames) {
    const oldPath = path.join(iosDir, from);
    const newPath = path.join(iosDir, to);
    if (await fs.pathExists(oldPath)) {
      await fs.move(oldPath, newPath);
      console.log(chalk.green(`📁 ${from} renommé → ${to}`));
    }
  }
}

// 📄 Renommer les fichiers .xcscheme et remplacer leur contenu
async function renameXCScheme(projectPath, projectName) {
  const iosDir = path.join(projectPath, 'ios');
  const xcodeprojName = `${projectName}.xcodeproj`;
  const schemesDir = path.join(iosDir, xcodeprojName, 'xcshareddata', 'xcschemes');

  if (!await fs.pathExists(schemesDir)) return;

  const files = await fs.readdir(schemesDir);
  for (const file of files) {
    if (file.endsWith('.xcscheme') && file.includes('AwesomeProject')) {
      const oldPath = path.join(schemesDir, file);
      const newPath = path.join(schemesDir, `${projectName}.xcscheme`);

      await fs.move(oldPath, newPath);
      console.log(chalk.green(`📄 Fichier xcscheme renommé → ${projectName}.xcscheme`));

      let content = await fs.readFile(newPath, 'utf8');
      content = content.replace(/AwesomeProject/g, projectName);
      content = content.replace(/awesomeproject/g, projectName.toLowerCase());
      await fs.writeFile(newPath, content);
    }
  }
}

// 🧠 CamelCase utilitaire
function toCamelCase(str) {
  return str
    .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (c) => c.toLowerCase());
}

// 🔍 Parcourir récursivement tous les fichiers
async function getFiles(dir) {
  const files = [];
  const items = await fs.readdir(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = await fs.stat(fullPath);
    if (stat.isDirectory() && item !== 'node_modules') {
      files.push(...(await getFiles(fullPath)));
    } else if (stat.isFile()) {
      files.push(fullPath);
    }
  }
  return files;
}

// 🎯 Extensions de fichiers à traiter
function shouldProcessFile(filePath) {
  const ext = path.extname(filePath);
  const filename = path.basename(filePath);

  const processableExtensions = [
    '', '.js', '.ts', '.tsx', '.json', '.xml', '.java', '.kt', '.swift',
    '.h', '.m', '.mm', '.pbxproj', '.plist', '.xcscheme', '.xcworkspacedata', '.storyboard', '.gradle'
  ];

  const importantFiles = [
    'Podfile',
    'settings.gradle',
    'project.pbxproj',
    'contents.xcworkspacedata',
    'LaunchScreen.storyboard'
  ];

  return processableExtensions.includes(ext) || importantFiles.includes(filename);
}

// 🚀 Lancer le script
createProject();
