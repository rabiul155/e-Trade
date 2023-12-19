"use client"
import Context from '@/context/Context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function Provider({ children }) {
    return (

        <Context>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </Context>

    );
};

export default Provider;