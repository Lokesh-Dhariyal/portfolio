import {Experience, SkillLayout} from '../../index'
function Exp() {
  return (
    <div id='insight' className='text-white w-full h-fit -z-10 inset-0
      bg-[linear-gradient(to_right,#1c398e38_1px,transparent_1px),linear-gradient(to_bottom,#1c398e38_1px,transparent_1px)] 
      bg-[size:20px_20px] overflow-auto'>
      <SkillLayout className=''/>
      <Experience/>
    </div>
  )
}

export default Exp