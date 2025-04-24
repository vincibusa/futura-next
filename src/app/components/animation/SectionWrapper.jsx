const SectionWrapper = ({ 
  children, 
  className = '', 
  animation = '', 
  delay = '',
  id = ''
}) => {
  const animationClass = animation ? `animate-${animation}` : '';
  const delayStyle = delay ? { animationDelay: `${delay}ms` } : {};
  
  return (
    <div 
      id={id}
      className={`${className} ${animationClass}`} 
      style={delayStyle}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
