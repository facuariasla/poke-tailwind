
const BarValues = ({value}:any) => {

  return (
    <div className='flex flex-row h-4 w-full bg-white rounded-md'>
      <div style={{width: `${value}%`}} className='bg-green-400 rounded-md'></div>
    </div>
  )
}

export default BarValues