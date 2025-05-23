function PrankWindow() {
    const openPrankWindow = () => {
        const prankWin = window.open(
          "",
          "prankWindow",
          "width=500,height=500,left=200,top=200"
        );
    
        if (!prankWin) {
          alert("Popup blocked! Please allow popups for this site.");
          return;
        }
    
        prankWin.document.write("<img src='https://i1.sndcdn.com/artworks-F35OU0eOpcjHaeiP-jEMs5w-t500x500.jpg'/>");
    
        let x = 200;
        let y = 200;
        let dx = 25; // moderate speed
        let dy = 14;
    
        const interval = setInterval(() => {
          try {
            x += dx;
            y += dy;
    
            if (x <= 0 || x >= screen.width - 300) dx = -dx;
            if (y <= 0 || y >= screen.height - 200) dy = -dy;
    
            prankWin.moveTo(x, y);
          } catch (err) {
            clearInterval(interval); // stop if window is closed or blocked
            console.log("Prank window closed or blocked.");
          }
        }, 50); // move every 50ms (20 fps approx)
      };
    
      return (
        <div style={{ padding: "40px", textAlign: "center" }}>
          <h1>React Prank App</h1>
          <button
            onClick={openPrankWindow}
            style={{
              padding: "12px 24px",
              fontSize: "18px",
              cursor: "pointer",
              borderRadius: "8px",
            }}
          >
            Launch Prank Window
          </button>
        </div>
      );
}

export default PrankWindow;