export default function ColorCard({color, onClick}){
    const cardStyle = {
        height: '70%',
        backgroundColor: color,
      };
    return(
        <div className="card shadow-lg p-3 mb-5 rounded" style={cardStyle} onClick={onClick}>
        </div>
    )
}