import "./LoadingIcon.css";
function LoadingIcon() {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <div className="spinner"></div>
      <p className="text-bg-bgDark text-lg font-semibold">Loading...</p>
    </div>
  );
}
export default LoadingIcon;
