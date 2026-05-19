import { TrendingUp, Coins } from 'lucide-react';

const mockStaking = [
  { protocol: 'Lido', asset: 'stETH', staked: '1.5', value: 4500, apy: 3.8, rewards: '0.04', rewardValue: 120, logo: 'https://cryptologos.cc/logos/lido-dao-ldo-logo.svg?v=029' },
  { protocol: 'Aave', asset: 'aUSDC', staked: '1000', value: 1000, apy: 5.2, rewards: '12', rewardValue: 12, logo: 'https://cryptologos.cc/logos/aave-aave-logo.svg?v=029' },
];

export function StakingDashboard() {
  const totalStaked = mockStaking.reduce((acc, item) => acc + item.value, 0);
  const totalRewards = mockStaking.reduce((acc, item) => acc + item.rewardValue, 0);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-green-500/10 rounded-lg">
          <TrendingUp className="w-6 h-6 text-green-500" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-white">Yield & Staking</h2>
          <div className="flex justify-between items-center mt-1">
            <p className="text-sm text-gray-400">Total Staked: ${totalStaked.toLocaleString()}</p>
            <p className="text-sm text-green-400">Est. Rewards: +${totalRewards.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockStaking.map((item) => (
          <div key={item.protocol} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.logo} alt={item.protocol} className="w-8 h-8 rounded-full bg-white p-1" />
                <div>
                  <h3 className="font-medium text-white">{item.protocol}</h3>
                  <p className="text-xs text-gray-400">{item.asset}</p>
                </div>
              </div>
              <div className="px-2 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full">
                {item.apy}% APY
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Staked</span>
                <span className="font-medium text-white">{item.staked} ${item.asset.replace(/^[a-z]+/, '')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Value</span>
                <span className="font-medium text-white">${item.value.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm pt-2 border-t border-gray-700/50">
                <span className="text-gray-400 flex items-center gap-1">
                  <Coins className="w-3 h-3" /> Rewards
                </span>
                <span className="font-medium text-green-400">{item.rewards} ${item.asset.replace(/^[a-z]+/, '')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
