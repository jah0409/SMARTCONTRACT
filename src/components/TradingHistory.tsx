import { History, ArrowRightLeft, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const mockHistory = [
  { id: 1, type: 'swap', from: 'ETH', to: 'USDC', amountIn: '0.5', amountOut: '1500', date: '2023-10-25 14:30', status: 'completed' },
  { id: 2, type: 'receive', token: 'LINK', amount: '120', date: '2023-10-24 09:15', status: 'completed' },
  { id: 3, type: 'send', token: 'USDC', amount: '500', date: '2023-10-22 18:45', status: 'completed' },
  { id: 4, type: 'stake', token: 'ETH', amount: '1.5', protocol: 'Lido', date: '2023-10-20 11:20', status: 'completed' },
];

export function TradingHistory() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-purple-500/10 rounded-lg">
          <History className="w-6 h-6 text-purple-500" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
          <p className="text-sm text-gray-400">Your latest transactions</p>
        </div>
      </div>

      <div className="space-y-3">
        {mockHistory.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-800 rounded-full">
                {tx.type === 'swap' && <ArrowRightLeft className="w-4 h-4 text-blue-400" />}
                {tx.type === 'receive' && <ArrowDownLeft className="w-4 h-4 text-green-400" />}
                {tx.type === 'send' && <ArrowUpRight className="w-4 h-4 text-red-400" />}
                {tx.type === 'stake' && <ArrowRightLeft className="w-4 h-4 text-purple-400" />}
              </div>
              <div>
                <p className="font-medium text-white capitalize">
                  {tx.type === 'swap' ? `Swap ${tx.from} to ${tx.to}` :
                   tx.type === 'stake' ? `Stake ${tx.token} on ${tx.protocol}` :
                   `${tx.type} ${tx.token}`}
                </p>
                <p className="text-xs text-gray-400">{tx.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-white">
                {tx.type === 'swap' ? `${tx.amountIn} ${tx.from} ➔ ${tx.amountOut} ${tx.to}` :
                 tx.type === 'receive' ? `+${tx.amount} ${tx.token}` :
                 tx.type === 'send' ? `-${tx.amount} ${tx.token}` :
                 `${tx.amount} ${tx.token}`}
              </p>
              <span className="text-xs px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full">
                {tx.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
