import { TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center mb-6">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-600 mb-4">
            Jota's Financias
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Conjunto completo de interfaces modernas e tecnologias para seu sistema financeiro pessoal
          </p>
          <div className='mt-6'>
            <p className='text-sm px-4 py-2 font-bold'>
              5 Interfaces Prontas para Uso
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
