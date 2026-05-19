import { Wallet } from 'lucide-react';

const mockTokens = [
  { symbol: 'ETH', name: 'Ethereum', balance: '2.5', price: 3000, value: 7500, logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029' },
  { symbol: 'USDC', name: 'USD Coin', balance: '1500', price: 1, value: 1500, logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=029' },
  { symbol: 'LINK', name: 'Chainlink', balance: '120', price: 15, value: 1800, logo: 'https://cryptologos.cc/logos/chainlink-link-logo.svg?v=029' },
  { symbol: 'UNI', name: 'Uniswap', balance: '400', price: 8, value: 3200, logo: 'https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=029' },
];

export function TokenDisplay() {
  const totalValue = mockTokens.reduce((acc, token) => acc + token.value, 0);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-500/10 rounded-lg">
          <Wallet className="w-6 h-6 text-blue-500" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">Assets</h2>
          <p className="text-sm text-gray-400">Total Balance: ${totalValue.toLocaleString()}</p>
        </div>
      </div>

      <div className="space-y-4">
        {mockTokens.map((token) => (
          <div key={token.symbol} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:bg-gray-800 transition-colors">
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={token.logo} alt={token.name} className="w-10 h-10 rounded-full bg-white p-1" />
              <div>
                <h3 className="font-medium text-white">{token.name}</h3>
                <p className="text-sm text-gray-400">{token.balance} {token.symbol}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-white">${token.value.toLocaleString()}</p>
              <p className="text-sm text-gray-400">@ ${token.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
