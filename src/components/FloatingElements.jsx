export default function FloatingElements() {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Hearts */}
        <div className="absolute left-1/4 top-1/4 text-pink-400 animate-float-slow animate-sway-medium opacity-70">
          <Heart size={24} />
        </div>
        <div className="absolute left-3/4 top-1/3 text-pink-300 animate-float-medium animate-sway-slow opacity-60">
          <Heart size={20} />
        </div>
        <div className="absolute left-1/2 top-1/6 text-pink-400 animate-float-fast animate-sway-fast opacity-80">
          <Heart size={16} />
        </div>
        <div className="absolute left-1/6 top-2/3 text-pink-300 animate-float-slow animate-sway-medium opacity-70">
          <Heart size={22} />
        </div>
        <div className="absolute left-5/6 top-3/4 text-pink-400 animate-float-medium animate-sway-slow opacity-60">
          <Heart size={18} />
        </div>
        
        {/* Butterflies */}
        <div className="absolute left-2/3 top-1/5 text-purple-400 animate-float-medium animate-sway-slow opacity-70">
          <Butterfly size={26} />
        </div>
        <div className="absolute left-1/3 top-2/3 text-purple-300 animate-float-slow animate-sway-medium opacity-60">
          <Butterfly size={22} />
        </div>
        <div className="absolute left-4/5 top-1/2 text-purple-400 animate-float-fast animate-sway-fast opacity-80">
          <Butterfly size={18} />
        </div>
        <div className="absolute left-1/5 top-1/2 text-purple-300 animate-float-medium animate-sway-slow opacity-70">
          <Butterfly size={24} />
        </div>
      </div>
    )
  }
  
  // Simple SVG components for the heart and butterfly
  const Heart = ({ size }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
  
  const Butterfly = ({ size }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M14.0658 2.05735C14.6878 1.05783 16.1304 1.05783 16.7524 2.05735L22.1538 10.998C22.7759 11.9976 22.0548 13.2699 20.9106 13.2699H9.90763C8.76344 13.2699 8.04227 11.9976 8.66431 10.998L14.0658 2.05735Z" />
      <path d="M9.93422 2.05735C9.31218 1.05783 7.86959 1.05783 7.2476 2.05735L1.84619 10.998C1.22415 11.9976 1.94532 13.2699 3.08951 13.2699H14.0924C15.2366 13.2699 15.9578 11.9976 15.3357 10.998L9.93422 2.05735Z" />
      <path d="M12 15.5699L19.5 21.2699" strokeWidth="2" stroke="currentColor" fill="none" />
      <path d="M12 15.5699L4.5 21.2699" strokeWidth="2" stroke="currentColor" fill="none" />
    </svg>
  )