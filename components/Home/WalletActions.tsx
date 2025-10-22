import { useFrame } from '@/components/farcaster-provider'
import { farcasterMiniApp as miniAppConnector } from '@farcaster/miniapp-wagmi-connector'
import { parseEther } from 'viem'
import { base } from 'viem/chains'
import {
  useAccount,
  useConnect,
  useDisconnect,
  useSendTransaction,
  useSwitchChain,
} from 'wagmi'

export function WalletActions() {
  const { isEthProviderAvailable } = useFrame()
  const { isConnected, address, chainId } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: hash, sendTransaction } = useSendTransaction()
  const { switchChain } = useSwitchChain()
  const { connect } = useConnect()

  async function sendTransactionHandler() {
    sendTransaction({
      to: '0x31A8a0A4A59a25bE922A45CB8cf464f9ac7416E4',
      value: parseEther('0.000001'),
    })
  }

  // Adresse du contrat déployé
  const contractAddress = '0x31A8a0A4A59a25bE922A45CB8cf464f9ac7416E4'

  async function handleSend(message: string) {
    try {
      await sendTransaction({
        to: contractAddress,
        value: parseEther('0.00001'), // Montant ETH par vote
      })
      alert(`Transaction ${message} envoyée !`)
    } catch (err) {
      console.error(err)
      alert('Transaction échouée')
    }
  }

  if (isConnected) {
    return (
      <div className="space-y-4 border border-[#333] rounded-md p-4">
        <h2 className="text-xl font-bold text-left">Question pool </h2>
        <div className="flex flex-row space-x-4 justify-start items-start">
          <div className="flex flex-col space-y-4 justify-start">
            <p className="text-sm text-left">
              Connected to wallet{' '}
              <span className="bg-white font-mono text-black rounded-md p-[4px]">
                {address}
              </span>
            </p>
            <p className="text-sm text-left">
              Chain Id{' '}
              <span className="bg-white font-mono text-black rounded-md p-[4px]">
                {chainId}
              </span>
            </p>

            {chainId === base.id ? (
              <>
                {/* Question existante */}
                <div className="flex flex-col space-y-2 border border-[#333] p-4 rounded-md">
                  <h2 className="text-lg font-semibold text-left">
                    Is Base token launch before November?
                  </h2>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleSend('Yes - before November')}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleSend('No - before November')}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* 1) Is Base token launch before December? */}
                <div className="flex flex-col space-y-2 border border-[#333] p-4 rounded-md">
                  <h2 className="text-lg font-semibold text-left">
                    Is Base token launch before December?
                  </h2>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleSend('Yes - before December')}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleSend('No - before December')}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* 2) Is Base token launch during Q1 2026? */}
                <div className="flex flex-col space-y-2 border border-[#333] p-4 rounded-md">
                  <h2 className="text-lg font-semibold text-left">
                    Is Base token launch during Q1 2026?
                  </h2>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleSend('Yes - Q1 2026')}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleSend('No - Q1 2026')}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* 3) Is Base token launch during Q2 2026? */}
                <div className="flex flex-col space-y-2 border border-[#333] p-4 rounded-md">
                  <h2 className="text-lg font-semibold text-left">
                    Is Base token launch during Q2 2026?
                  </h2>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleSend('Yes - Q2 2026')}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleSend('No - Q2 2026')}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* 4) Is Base token launch during Q3 2026? */}
                <div className="flex flex-col space-y-2 border border-[#333] p-4 rounded-md">
                  <h2 className="text-lg font-semibold text-left">
                    Is Base token launch during Q3 2026?
                  </h2>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleSend('Yes - Q3 2026')}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleSend('No - Q3 2026')}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* 5) Is Base token launch during Q4 2026? */}
                <div className="flex flex-col space-y-2 border border-[#333] p-4 rounded-md">
                  <h2 className="text-lg font-semibold text-left">
                    Is Base token launch during Q4 2026?
                  </h2>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleSend('Yes - Q4 2026')}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleSend('No - Q4 2026')}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      No
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <button
                type="button"
                className="bg-white text-black rounded-md p-2 text-sm"
                onClick={() => switchChain({ chainId: base.id })}
              >
                Switch to Base Mainet
              </button>
            )}

            <button
              type="button"
              className="bg-white text-black rounded-md p-2 text-sm"
              onClick={() => disconnect()}
            >
              Disconnect Wallet
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (isEthProviderAvailable) {
    return (
      <div className="space-y-4 border border-[#333] rounded-md p-4">
        <h2 className="text-xl font-bold text-left"> Question pool</h2>
        <div className="flex flex-row space-x-4 justify-start items-start">
          <button
            type="button"
            className="bg-white text-black w-full rounded-md p-2 text-sm"
            onClick={() => connect({ connector: miniAppConnector() })}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4 border border-[#333] rounded-md p-4">
      <h2 className="text-xl font-bold text-left">Question pool</h2>
      <div className="flex flex-row space-x-4 justify-start items-start">
        <p className="text-sm text-left">Wallet connection only via Warpcast</p>
      </div>
    </div>
  )
}
