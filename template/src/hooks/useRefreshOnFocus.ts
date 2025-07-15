import { useFocusEffect } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';
import React = require('react');

export const useRefreshOnFocus = (queryKey: string[]) => {
  const queryClient = useQueryClient();

  useFocusEffect(
    React.useCallback(() => {
      // Rafraîchir les données quand l'écran reprend le focus
      queryClient.invalidateQueries({ queryKey });
    }, [queryClient, queryKey])
  );
};

// Hook pour rafraîchir plusieurs requêtes
export const useRefreshMultipleOnFocus = (queryKeys: string[][]) => {
  const queryClient = useQueryClient();

  useFocusEffect(
    React.useCallback(() => {
      // Rafraîchir toutes les requêtes spécifiées
      queryKeys.forEach(queryKey => {
        queryClient.invalidateQueries({ queryKey });
      });
    }, [queryClient, queryKeys])
  );
}; 