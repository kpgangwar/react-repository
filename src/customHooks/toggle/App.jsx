import useToggle from '../useToggle'
export default function App() {
    const [isTextvisible, alterTextVisibility] = useToggle(false);
  return (
    <>
    {isTextvisible ? <div>Present</div> : <div>Not Present</div>}
    <button onClick={alterTextVisibility}>Tumble</button>
    </>
  )
}
