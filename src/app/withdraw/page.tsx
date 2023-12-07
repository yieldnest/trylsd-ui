
import WithdrawForm from '@/components/WithdrawForm'

export default function Deposit() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <WithdrawForm />
        </div>
      </div>
    </div>
  )
}