#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

// Fonction principale
async function createProject() {
  const projectName = process.argv[2];

  if (!projectName) {
    console.log(chalk.red('❌ Veuillez spécifier un nom de projet'));
    console.log(chalk.yellow('Usage: npx react-native-template-charlytemplate MonProjet'));
    process.exit(1);
  }

  const projectPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(__dirname, '..', 'template');

  try {
    // Vérifier si le dossier existe déjà
    if (fs.existsSync(projectPath)) {
      console.log(chalk.red(`❌ Le dossier ${projectName} existe déjà`));
      process.exit(1);
    }

    console.log(chalk.blue(`🚀 Création du projet ${projectName}...`));

    // Copier les fichiers du template
    await fs.copy(templatePath, projectPath);

    // Remplacer les variables dans tous les fichiers
    await replaceVariables(projectPath, projectName);

    console.log(chalk.green('✅ Projet créé avec succès !'));
    console.log(chalk.yellow('\n📝 Prochaines étapes :'));
    console.log(chalk.cyan(`   cd ${projectName}`));
    console.log(chalk.cyan('   npm install # ou yarn install'));
    console.log(chalk.cyan('   npm run android # ou npm run ios # ou yarn run android # ou yarn run ios'));

  } catch (error) {
    console.error(chalk.red('❌ Erreur lors de la création :'), error);
    process.exit(1);
  }
}

// Fonction pour remplacer les variables
async function replaceVariables(projectPath, projectName) {
  const replacements = {
    '{{PROJECT_NAME}}': projectName,
    '{{PROJECT_NAME_LOWER}}': projectName.toLowerCase(),
    '{{PROJECT_NAME_CAMEL}}': toCamelCase(projectName),
    '{{BUNDLE_ID}}': `com.yourcompany.${projectName.toLowerCase()}`
  };

  // Parcourir tous les fichiers
  const files = await getFiles(projectPath);

  for (const file of files) {
    if (shouldProcessFile(file)) {
      let content = await fs.readFile(file, 'utf8');

      // Remplacer toutes les variables
      Object.keys(replacements).forEach(placeholder => {
        content = content.replace(new RegExp(placeholder, 'g'), replacements[placeholder]);
      });

      await fs.writeFile(file, content);
    }
  }
}

// Fonctions utilitaires
function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

async function getFiles(dir) {
  const files = [];
  const items = await fs.readdir(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = await fs.stat(fullPath);

    if (stat.isDirectory() && item !== 'node_modules') {
      files.push(...await getFiles(fullPath));
    } else if (stat.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

function shouldProcessFile(filePath) {
  const ext = path.extname(filePath);
  const processableExtensions = ['.js', '.ts', '.tsx', '.json', '.xml', '.java', '.swift', '.h', '.m', '.mm'];
  return processableExtensions.includes(ext);
}

// Lancer le script
createProject();
