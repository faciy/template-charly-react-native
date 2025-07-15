import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Nombre de tentatives en cas d'échec
      retry: 2,
      
      // Temps avant que les données soient considérées comme périmées
      staleTime: 5 * 60 * 1000, // 5 minutes
      
      // Temps de conservation en cache
      gcTime: 10 * 60 * 1000, // 10 minutes (anciennement cacheTime)
      
      // Désactiver le refetch automatique quand la fenêtre reprend le focus
      refetchOnWindowFocus: false,
      
      // Désactiver le refetch automatique lors de la reconnexion
      refetchOnReconnect: true,
      
      // Désactiver le refetch automatique lors du montage
      refetchOnMount: true,
    },
    mutations: {
      // Nombre de tentatives pour les mutations
      retry: 1,
      
      // Temps d'attente avant de considérer une mutation comme échouée
      networkMode: 'online',
    },
  },
});

// Fonction pour invalider le cache d'un type spécifique
export const invalidateQueries = (queryKey: string[]) => {
  queryClient.invalidateQueries({ queryKey });
};

// Fonction pour précharger des données
export const prefetchQuery = async (queryKey: string[], queryFn: () => Promise<any>) => {
  await queryClient.prefetchQuery({
    queryKey,
    queryFn,
  });
}; 