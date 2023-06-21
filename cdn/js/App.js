
(function(){

    // 자식 컨퍼넌트
    // 1.pic
    function ProPic({color}){
        return(
            <img src={`./images/${color}.png`} alt={color} />
        )
    }
    // 2.color
    function ProColor({color,colors,size,sizes,changeColor}){
        // const color = window.data.allColor;
        // console.log(color);
        function optionColor(){
           return colors.map(
                 (item,index)=>(<option value={item} key={index}> {item} </option>)
            )
        }
        function colorOption(e){
            // console.log(e.target.value)
            changeColor(e.target.value)
        }
        return(
            <p>
                <label htmlFor="color">COLOR :</label>
                <select id="color"
                        defaultvalue={color}
                        onChange={colorOption}>
                   {optionColor()}
                </select>
            </p>
        )
    }
    // 3.size
    function ProSize({color,colors,size,sizes,changeSize}){
        // const size = window.data.allSize;
        // console.log(size);
        function optionSize(){
            return sizes.map(
                (item,index)=>(<option value={item} key={index}> {item} </option>)
                )
        }
        function sizeOption(e){
            // console.log(e.target.value)
            changeSize(e.target.value)
        }
        return(
            <p>
                <label htmlFor="size">SIZE :</label>
                <select id="size"
                        defaultvalue={size}
                        onChange={sizeOption}>
                   {optionSize()}
                </select>
            </p>
        )
    }


    // App 부모 컨퍼넌트

        function App(){
            // useState 만들기
            const [color,setColor] = React.useState('pink')
            const [colors,setColors] = React.useState(window.data.allColor)
            
            const [size,setSize] = React.useState('110')
            const [sizes,setSizes] = React.useState(window.data.allSize)
            // console.log(color,colors,size,sizes)
            // 

            // 변경할속성 함수만들기
            function changeColor(str){
                const ableColor = window.data.byColor[str];
                // console.log(ableColor)
                setSizes(ableColor)
                setColor(str)
            }

            function changeSize(num){
                const ableSize = window.data.bySize[num];
                // console.log(ableSize)
                setColors(ableSize)
                setSize(num)
            }
            // 

            return (
            <div id="wrap">
                <div>
                <div className="top">
                    <ProPic color={color}/>
                </div>
                <div className="bottom">
                    <ProColor color={color}
                              colors={colors}
                              size={size}
                              sizes={sizes}
                              changeColor={changeColor}/>
                    <ProSize color={color}
                              colors={colors}
                              size={size}
                              sizes={sizes}
                              changeSize={changeSize}/>
                </div>
                </div>
            </div>
            )
        }

        // export
        const root = ReactDOM.createRoot(document.querySelector('#root'))
        root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        )

    }
    )()