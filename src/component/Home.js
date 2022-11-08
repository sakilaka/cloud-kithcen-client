import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import kacchi from '../images/kacchi.jpeg';
import ServicesCard from './ServicesCard';

const Home = () => {
    const services = useLoaderData();
    return (
        <div className='my-10 container mx-auto'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-20'>
                <div>
                    <img className='h-96 w-full p-8' src={kacchi} alt="" />
                </div>
                <div className='text-justify'>
                    <p className='text-2xl font-bold p-5 lg:p-1 text-blue-400 lg:mt-[130px] mt-3 ml-5'>Here you all food item for Lunch and Dinner. <br />You also get Snacks item form here. <br /><span className='text-xl text-red-500'>Thank You for your Support.</span></p>
                </div>

            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-20 my-12 bg-slate-100 pl-5 py-10 pr-5 lg:pl-28 lg:py-20 mx-auto'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className='text-center'>
                <Link to='/services'><button className="btn btn-success btn-outline">See More</button></Link>
            </div>

            <div className='container mx-auto my-10 lg:w-9/12 border border-white p-5'>
                <div className="hero min-h-screen" style={{ backgroundImage: `url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFBcUFRQXGBcYGRcZGhkYGhcXGBoaGBoZGRoXGRkaICwjGh0qHhoZJDYkKS0vMzMzGiI4PjgyPiwzMy8BCwsLDw4PHhISHjIpIyoyMjIyLy86MjQvNDIvMi8yND4vNTQzMjUyOjIyNDIvMjQyMjIyMjI0MjQyNDIyLzIyMv/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBQYEB//EADsQAAIBAgQDBgMHAwQDAQEAAAECEQADBBIhMQVBUQYTImFxgTKRwUJSYqGx0fBy4fEUIzPCgqLishX/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAtEQACAQMDAwIFBAMAAAAAAAAAAQIDESESMUEEIlETYXGBkbHRFDLB8EJSof/aAAwDAQACEQMRAD8A8ZooooAKKKKACiiigAooooAKKKKACilAnQVKqDb4j0G3uf2+dAEaITsJqQIBufYan9qczDYmfwroPc/59ab3h5aem/z3q0IeE/B7sY/LSnA/iUeiz+cfWoacBVWFck7z8bewj/tSh/xv8v8A6qOKUCiwiXN+Mf8Akv8AY0ZZ+yp/pMH5f2qMCiKLCuOKDzU9GH1H7UjWyNeXUaj504ORpOnQ6j5GlVh/Seo2+X89KBkUURUzAcx/5Lt7j/HpTWQj06jamBFFBFOpCKAGEU2KkIpppWAjIpCKeRTTUtFIbRQRRUsYUUUUgCiiigAooooAKKKKACiiigAooooAKeiT5AbnpQiz5Abn+c6lJAAJGnIdfM0AAiOg/wDZv7fzWmM/IaDp+550xmJMmkqkgFinCkFPAqiWAp4FIBXfwzhl2+2W2sjmx0Uep+lEpKKvJ2Q4xcnaKycQFduB4bdu/wDHbZvPZfmdK2XC+zNq34nHev8A+g9v81bl2JCKI1iFG1cdXrLLtXzf4O6n0X+7+SMlY7IsNbtxU8lGY/M/tXYnAcKnJ3PVmgfJYq/x+DPeN3asUHNyJGnOqnFLcQSVMbTuPmNK8+XV1J7M7afTUY8fURMDZHw2LfuM36065YRNGtW18igG+tXPAcDlYNd0YwVU7rBBBjrpOtX/ABB7Tp3d7KCwMDUyNAW2ka/SsHVqN7thOcItJRVjCpbtsYFq2Z0jKNZ5RGtQ3uF2ZI7sKZgrqNuUdfKrvs/gP9K7XLrqwIYWwAS2h8Nzy9K4e0NhRbF60x1Yq48RkmWzyfl8q0jUmp6VJjapyWYlO3Zyy4m27KfumGj56kVW4rs3eTVYceWh+R/erTCi63iAII1BJAn5/rVjZxJIOYFSPiB0rpj1NSL3uYy6ajLFrP2MFdtMphlKnoRBqMit/iUS4IdQw8xVBjeAg62m/wDBvof3rsp9XGWJY+xx1ejlHMc/czppjCpr1pkJVgQRyNRmunc5NiOkNONIaGUJRRRUAFFFFABRRRQAUUUUAFFFFABTlWTFNqZF0jmdSei/zX5UAOkR5DYdT1PlULMSZNK7yfIaAeVMpoBaUCkpwq0IcBT1FNFaXspwA4hw7LKzCr98jefwjn8utTOahG7KhTc5WQdn+zjX4e5ITkB8T+nRfPny61ssQbeHQWwACNkXQD1qbiPE7eHTu7cG5zfp5LVHwUtcvhjJAlidCCfsgz1P6V5tapKTu9/HCPVpU4wjjbzyy4wveXFcZu7IFshCp8SuTJnlAHvV7wrAG2fETrEjYmZhZG3M+1dmDwq21LNJOrnmSTsPQfSnXryqLYYkZSWnWDKn6/qa4J1Hhtlvuwig7Q4+3h2M2yGaAAv2pOunlvJ6VWnjFt9Lcq4ysQRoR1kfXarPtBgrd2bjyxUEaTMHoJ6wfasvbwhtyVnxZgRvlXVtJ6afl0rq6eFGcW2s/wDDKWuLXg0qcKa+Fv27qhjuCGPqDBHKaZh+HDNL3vGpjMcrW4jUBSdoPXkazim4zlLdxlDZQVBaD5lRvA1Pl6V32eFMyBWuBirXCwjxNAIMMRMA68ukmonBRdlZGUtd98HV2jdrkC3BVWCrlICxl0YyY0B19DRwuxc0XOCqoo8JEb7abx1puPQrhLYS2zBdWUSxD65s0DxaH5RTewrL/p3yRmDkwdjtrp5VhUb9FtfA6KeJaWD4pBeNtbc5RqzaL19/XSmXXW46BGtgyQ0y5I3KiCNYqDj2Pe2TmCqqnaSpYnqYlgAAN6j4Hi1Zv+MAHVYEa7HetKdFxSklx9TWTTw3kbx3Cd347ZJHMbkab+kVEgEQwIPUgqZ8watbrMLnjmDmEMI0Oqn0I29a48RaVUJZpKgDxQN9oMDMOVOp4Ry1ZyUU0VnE8Ojg5llQASw3TNoNfM1l8dgWtmfiQ7MNvQ9DWtxLhMHck63CCBqdEaAT01H51SYbEgrlYZlOjA/rXZ085Qj5RjpVWOd/P5M+RTasOI4I2iCNUbVW+h8xXAa9BNSV0cbi4uzEpKWkNDAKKKKkAooooAKKKKACiiigCS2snXYan0H8inO2nmdT6ch/PKhF0A+8dfQfw/KmO0kn+RyFADKKKKaAWnrTBT1q0JljwfAG/dW2NBux6KNz67D1NejY3ErhbQt2xDsANPsJyQeZ3NVfYjAi3aN5x8XjM/dUxbX3Yz6elS4e81zEZlYrd7yAXA7shyEnNqVILa7xIrza1Rzk7cYX8np0YKnDPOX/AAhtrhrXbR7wd2S6lXgZoghlMxpsRr1rt7G8OZGLMUbxkCJMQSAxJ2JMADzpO2XDLuHyIb7FrjM8QYAULOU6gHUwPKrLs7ZQYI91C57bwZBOZz4XJOxGUHXauSblGLuXGSnlGyuJnJUEDKFEb8g2vzqtxKkGHII5AbTrrNLwXGd9bF3QOIt3V2y3E8Lg++oPQg86nx4M5ToJgeZIkbbadaipSUk3bJUJWKVrfeBgpAMEgnaeYPlGlZfE3CjgEHKJldmzeKYJGszWsygSAJ+IRWN7Sk3DlBCtOYZtIylZM9P3q6eEkhyzdj+BuiXGZ2LC4FUIwh0JJUZiNIk/wVp0lgHW3JAeEIhoY5SxKgjxEhjOuhNZ5rjs1vIlt2KC5cJVZRQNJLKY2OtXmF4xcKADK0nYA+FdWOWDvGw60pRUpapNnPOc0u1XJcSWtqqIoQLIPdDICYgEgHeNOtZDDYo4fFA5QiO0QCBvIzED8XP0rS4jjLPbeCGyrr6Awbix7n2FYnjWPhUfRmz6qykqQpOpOx1HvNbRpxa0rNzkhUqKpqki97TcNd5YKWGni3gaR4Sdd9+hpnZ/hdyPEpXaNh6iJ01/StP2Zxy38IGOrLE/T8qhxOKdH8OUDqQazdeUIKDPSUVN6luZzG3GNzK5ckqV01goZGp2I0IHPoa5eKZmsnNAZSQwI3HKfMRzrRPhnFxbvgbNMCYOmjFRz9fKuDidxXuLKAA6XBE8og9fs6+Roi47+BSXkpRZa5hgjFAoUZWbw5NRpoZOnLXas5esG0wBIKnYj7QneOVbzELYsL3j21JeBIAIAmASu2k71QcVwSumZSA0lkEBJUTsOU6VtSq+dmY6UtiC3kdCjHwtsfutyIrOYmwUYo26mD+9WlkjRQZOk6EQfQ61JxrD5kW7zWFb0+yfpXTRnolpfJHUU9UdS4M+aQ04ikrsZwiUUUUhhRRRUgFFFFABRRT7Qlh6igCRtM3kAo9Tv/2+dQVK58I8yT+n96ioAKBRQKaAmRJEyB8/pU1jD52VQwliFGjczHSogPCvq3/Wrjs1bBxVoQID66SSQGOk7Dw05StFvwhwWqSXlm8uhVstbtkEqNVHxBLawsLuRMjTyqw7MsTctuhUDDoEuKwP+6tyM77QG0kDWSvnNU/FzGRlJBVQwIJBBYswI109Kh7JcKF5rt8XB3oPhFwZrZPhca8uY5+nI+NBc+Puen1Dwz1DjuDF+xcykSRkz7MiOU7067EJPt61nbFi2oNsqqAhnVWgC2ggKpBOkKNfWPWy4lxNu7GFOXvbhKkoTlKAyW6rmAy+5OwqtxTMLttn1OfL3h2UEEBT0EmAfOseqneSjEy6WNk5M4eGY18PjDbe4rW7694uhXJMhQQfQfPyrV8RHgDKZJ1IgmY9JjQCsLiMSLuKRYQPaJDMYBnX7R3GaVC+tbK/JtKyqQWKBtIZV3YA+o06j1o1y02SzY6Gle5nnxEvpuJ0MiPUelVGGwZvYrMQD3Vti3q5A1HSNau+JYfOVZcwyZgSWDFtZ1jYeU1Sdm7HeviHW4UZWKmJH+2yiTMQRm1joKiLbi+MffBd0dF8XHe4jC3F4rpbDC4Vt7AZdkEElRzLehnxWGtYSLl9rpzOQuXkisAC3Pc8tx1NaS73a2btwKJCKVMCUYN48jdG02396y2Iv3CP9xFZSABcGZnCkybeTXwsCNR06waacnvlckK1znxuLs3bqXUti2jd3GSFLLvDAdQNffWrDtTwBXugjKLd1GKlFGaDAYARI1ZdYrKtwW5YZpAUd4otlmLAqdvDMaAzB1/Wt6727NvvLiXGdwB4zbXQDdAuymfXaaqpPRmDuS4J2MDwC7dwl57JBA8QnkUBIzSdNI51osPxHNlNxoV2HiA1A6lef86VB2z7pA10lSWTKYnMcw8KydwJPzJqo7O4cG2l24CyAcmIZQph2gamK1sqq9T+3CL0dpdYiy5yXe8lLeZU0AkEyfLn61xWCpzXC/iJgDYSCASSf5860XaHC21w6m0gGVtQpiZUxJ5+tZDht0W7ndu6EuwA01OYHmetPRK2DKdVJ5L3i+GFy2HYTAOWTKmQMwMeh/Osi1oXQqgBe7zeI+IqAdQAPQa8q3fDjmtvbdM0E5TpqSsj0Ose1V3FeEouV0Re8E/EPiJndhr1+dTTvDklVoydjD40kBGLeMHLsIg8ywH5E1ZJaDoyH7ake8fvVZxpCCrTEliVJ1zTqY+70NdvDrnwnzFdEsKMkbwymjKOsaHcVHXfxS3lu3B+I/nr9a4TXqLKueU1Z2EooooEJRRRUDCiiigAp9nf2b/8mmU+1ufRv0NABc2X0+pplSXfs/0/U1HQAUopBS1SAnU+FfVv+tXvY4D/AFtnUQzMCDGkq3XeqNBov9R/61YcExQt4my2UQt1eZ2Jjr50qivBr2ZVN2mn7o2/GnkQNTlG34ZECmdjkW263Hcd0QWaCdXB7tFIG5kyB5HpXTx+zldlAgSQPNTqNfQ1mcC72762lJGZwQRJ+LQyOcTv5141N3TS3/B6leF0eiYnDXLt5DbhSql4OgJylQpjTPGYwfu015YMXhlFoM/hiQNS2+g3nepez5L2wAf+OBLRJYLOo0ggACDVbxVldwUeFUlist4g3i7tlUiRqZB001nauaX7shSjZJEnEsDYVXVmAzguGLMGC7qY3LSOnyq0t41xg7Ooa5dKWwOsgEtmG0BWNY4O197rghiyshBOwPlyGhjr+vR2fkm2e9YtZN21aBnxFw2VjHISN/I1vRiv8mFTGxoccjC41q00uAC5Pw67Zp3019Jpt9Ql6/3dtQ1xj4RqjXNAWO3hJk8v0q7xyW7YcW8gcE6aQ3hCzcI5yvxdRWFxfFCyA30VXaFGVswZSAO8yiRoJJqWu6SiiE7pXNH/AP2ctt7HdwVDzJOcCDqQR8MQd+lUfB+JI9y4rIe6QK+cSGTNHhcbESTVzjbL3LYdQq3lXL3hXMj29ypJ3MbTsYqqxN3uktW1Jzx3pz7KzsGRX9WJ8PMmop1MvBo4qwcXNt7f+nVF8TBUKwInZgNxpryq64TZdkud/kJAUKkmFRRoT+OCum2ork4hYZ7RurAuZle3bY7lQAxgCWOWQNdJribjN26bYFsjwjO1uWAYEZi2knQbHQRUScpQ7fI8XOe/Zt3RfwxaACNWkgjwwR0hk0Aqg7IYgoygtOSSADpzG3t7xWyQW1uAtFx8pkZQEOVZ+yJYwDJJ51kh2hNy6bL27dm0pMJatKhBPwkmM0z7V09O24NL2ZnU/ci8uljbxOEfW3DPaImQgOYJprpqo9KzOCu4fKSxZO6YOhDMzPEwFQjQdfWtZicWjqRmi4ognUgGJGYDcfuKplwVm2CIzFlZZbo5JygSOgHXSt9VtzJxvwXPZfii3LbwrHK2vhJI6qYG8j3qTiFxL85H1UbBteUkjpptVH2FxYS9dt5Qoc7TMFS/P5/KuzjHFrdtmJKq5LAGRm011H6+o61g6VquPocck4PBluP4JiA4Hw6HqR5a6+nmafg7eUAelcL4/vWgMx8Q+Icv81eYdPpW1S8Uonf0l3FtmX47/wA9z1H6Cq1q7uJvmu3D+I/lp9K4jXqx2R5sn3MZRS0VQhtFFFZjCiiigAqS1v7EfMGo6fbaGB6EUAD7L6H9TTKmceGPusR8/wDBqECmgFoooqgOiypIWOTH/rTCdT6n9aip60AetX2N/C2L8atbUP5OoH6qV/OsrxObb276/ZYTvtIPLbatX2QdXw1uyxjOihSdg6iFPlrKn+ryqu4pw/47bAjf2P8AmvCm/TrX4/tz3IrXStzY2XYu1ntm9dSMyqwUmdIgMAD156VX9pcH37BUBCqAzAqwD29fCCsRsW3nwisz2d489llsPbZ2XmuaSuaVnKCN41Mbamtnhr4N15+LKoCQBpsup0zZZ10J5VlWvTnqSx7GEF5eTzzjAOHM27b2008RLeIA/ZYnMq8t+cVr+z+FVmtMIDDLcOijQqxJhTrt/JmqrjMSyXIKGEyAkupEwZ0Cjznr5UnZ62bYKLacOq3YvHUMGTIiiNwCc0j610QkqkF5JknGRf8ABry4i7mdirMLhyhcywl18pM7CG06yahxtm3YvkhiM7OyqqanTWDyM/ZHOTz0qOIh7GHFy0/d3LaLqkKCJBIygQQd4Ok+lXnF7lu9ctrC3EeHk+GAUkMkfaJG3ketYVFnVxkpeCtxjPhrlu+ha3auozRee4Va5B+JdkJzjTbw11DEWrE3nzs10ICpIITMsyep02G3uamx2Kd7aL3hZS2hygEiYIiOmlFvhQKLDANIWAugSNyZ5dPKsFU1vC9jlrVW04ozdvDNcL3A7hrSuVIJgBdSuUdTT+zvG3t4kIAMtxBmyrJViCVGg05yKtMbw+9hxCElrpOoHiVVI3nTMRy11McqqMBhr62muWrXjnQAqzW11l2G7EmRMGOtdMUnFp/D4FUJNrLLLB2Jt94+fvELk3AWYshzDLE6JlIEeVY/DZ72JuM2uQlfs8mMaqADpXc/aR7aXDldC4UW4gLlbVmYDSNNIp3YYgrcB3ZiZAkkEQdD8/nW8KcoRk3zZG05Xkki4WyLjQqakP4TvIjQQRuFGuu3LWq3EYQXzbViyjMZO88h6c6tAgUSpEaHMfCdJkA/yZqp7wW51AzMxWTA0EiB7UtTbwNRsrM5uGZLdwiGUi48HWSBuQT1B/OuPjtlWzv9rNmJLZiw28XLXr5Cuu9jAUQT41BMACWBYASx0gAHzrmx9xDaygrLRAVg3MFvQCI9a0hq16jNxTRV8Gs+Ka0D3Bbtu55A/OIA/WuPh9jKNqg7RYjKq2h1l/XePbT5GqivVq+yNZv06Rn3M60w040hr1DxxlFFFBQ2iiisxhRRRQAUUUU0B0HWfxLPuu/6H51BUqHTzBn25/T86bcWDptuPQ7UwGUUUUxC04U2lFMGeldgblu5YyMTmVgi77tcB5fhb9a1GNw4xCd4PjUeIc2UHKH9dIPsedeYdjsb3d7JMBxp5Muo/Kfyr03C3JIuIjI8mGBzW2aCSkEaSOUnf5eV1VNOTTXuet007wT+RjuK4NyCUYq67EaH0rj4N2la20XrfeOD4SxIbNEKGOxAPlzrd4zBpiFL2xDDVk5r+JeqfpWJ45wfNJiG68jXNSml2VFjhm1SDl3R38CYzG3MdcJCsqTJXNswIlT10HoK0eHutdOW3owURAmAum3ICfLWsd2etql3I7OrMQAoETv4ix06+R51rWvd3cUqwtlwxMxlB/qiDOsRpWlZaMR2MKfc+7c7OLM4t5RDKyhSZBJ5zqeWtUuBvC06pc8KSvdknwqcykpm+yjRoeRHpXdxriQFkZFzOIBywQAd2H9qyIx8owuFwTyMQV0mZE0qcZTWdhy0rCNZwriK4vGBQXgs/dpCC3byzJDLq8kE+rD1q/x3HGtAm3ZV4AOYXEXSJPKZ/cVguzOCR2yFLkLqLttyogjVSu2o51pO0tq1msFiYzhHVtFKZfihZ2IG9Z1IxjUSiZqlGSbaJLHGxeJNyzcW4qkgSmU+WYE9QdulZo4+5ZIVADccMQ0nNILGDEDUN8lq1w2CvG2ndoDats5F1nCg22XwmSZAAgbaxzruwOBtJauHFC2DlBXI5LMn2jmbWZ06UXhBt2v7F06aisGd7XYmw9i0cid4VAU220XKRmDLsdyK5+zt8W7IcS2UyRtqAQNen09q7OJ20uWGCKtu2Dm01LxPxMdZzHaqPFcJu2EDI+YOgdliIVttDM10w0unpvbPJMrxnqsanE8QtmyrtmW4SfEIKjnJA06fKqx8X36Z4yOCCDG7T9leY61wYJmuMEfwmPDlUZDz8S7xOvT0rquG9bgFEYWgZhgC7E6AAiZGgiOVSqenC3Kc9RYYzBRmuwucpkQT8KwASeUk5jPnyrN4DBlnLHlpsBtpy0rV4LHM2Q37SwojTU5fumd/81xOEtSxHxE5La6T0A6L51MKk3ePJfpxjaTGlhbAI+NtLY89sx8hWU4q3jgmSJk9STv+VW+Kd5ZrhGdoAAIIVQZ0jYaCs9iHzMT/ADSu/p6aizj6mpqRHSUtIa6zhEooooKGUUUVmMKKKKACiiigB9toM/P0O9SMukfd1Hmp1/v7moKntmR5rqPMcx/POqAhoqRxzGx28vKo6aELSiminCmBJacqQymCCCD0I1Br1PgHHi9q2RELcV2XmHWJWeh+teUg1acE4obDyfgbRh+jDzFYV6bnG63R0dPU0Ss9mexHDkW0NtYdGYi4GRQymSDmLDXbTlqKgxWS5KXUCXBEnZWnYnkpI1n4TPKq3hBt3LlvO0I/2wREEaGeQmKtWNtG1i6LFzKdiHtMTB6Eqxjp4gK82UFOO1uPoempOD88/UzvEez5BnLqDI6j9x+Rrjx+IaEV7GdROYoQG9QpGp960mL4iodu5B7omRbcaDTXLBlNZ2Nc737L6N4G6NEezgR84rn7oSw9SRq4xmrtWbKpMBhriDI0HKrZWGVlDRIy/Z13jeuM9nLLQXLKRvqSTqTzmNBuNN9NRVviuFI4ghWB6wfkabZ4eUTIBKyT4izb8pkGOdax6tLdWMJdK73WSo4TFu41hi2qOZ2nKRkKxzI/WruwHuMe6W2z21QzdaSgk+FFg66Tv9KoOIcIxDvnW4AVJy6EHKT8JP8AapcMmMtnwi2OpEkGdSIIG5A1nlSnol3RkriUZrDTH8U47jLTd1cKZDIICQCTGU7dBHTeulh3ai5edHJT4FnKgJ+CCdRNcPH7OJxKWlZUBSZOb4piJgco/OuW7wG6zIwYKcoDHViW5kbaaCKLU3FXaT5sLTNSwmzvvYf/AFZ7tJUgjKw0RephdzFLxt1VbeZHUPlTUQAUEbjQyTMeW1FjgrkQ9x21k5IQflVtjr2cILrA5PhzGSPbr51OtJpLKNfTk8vBjrPD72YjNkRT8Q0zfdgb/wANX+HwYWWiWaC7mJJjSenp5muXGcasodPGF26FvTp9B51ScV4tecCfArbAb+45VvoqVlnCMlKnTeMsucfxe3b8KkO//qPMmqLEXy2d2fOSVWdhHxMFHIaCuPuVGjvDcwFLR5EzvTb98QAPhXadyTuT5/tXXToxhGyMZ1XJ3ZJxHELJyCAdB8tTXV2T4Nbxdy6lx2RbdrvJUoNe8t29TcIAH+4TvyqjY5tafbusodVYgOoVx95QyvB8syKfYV0whZHDOWpmg4n2ZFrIRirPd3J7u42cLcytDsuRGhQCp8UTMLmqK/2UvoWV2tA2p74ZmPckWzeAuEKR4lVgMuYFgRvXHh+O4lFVEvuFXLlWQQuUyInbXfqNDIpX45da1ctMcxuhFd2LF2t2yGS2dcpAYAzGbSJjSqsyMFRNFLFFPIDaKKKgYUUUUAFFFFNAFOBim0UwOiRExodwOR6j+eVRusfQ9R1pFMaj+eVS6R1HTmp/agCClFOZI9DseRplNCFpaSimBc8F4y1k5WkoTtzXzX9q3GCx8Q9tgQR5MpB0KkHQg8wa8vrt4fxF7JlTod1Ox/Y+dctbp9bvHDOuh1OjtllHqlvGsysVw1oqur5bbHTzYsWXnsRUJW2lxGcFrLjMJ1MagqY3KtoY3jzqm4D2ognuyFYjVXE9RI67n57V02caUBUhXQmcjiRPURBUxzBFcMlptq391g7ovVdx2+I/ifdrdbuHYJpETG2ohtSPWuIY+6mzBvyrrOPTa3h7cnr3lw+wLaVy4i2rqbltYI/5LYk5fxrOpTqNwfI1Eoa23h+34LjPSrZQ48duLGZDrtpv6Uw9p43Q/Km4zib3kW3kBII1WSSQI0HL2rjuYIDwtdRX+6cxA8mYAhT/AAxT/TwbwsfQXrTW/wCTpbtUPuH5VzXO1bn4VPyArlUtZu+NNROh8+YOvzqO8guMbjDIhIGkEsY+FdpPU8q1h01LxkiVefnAl3j+IchR4ZIGpPMxyrnx4uA5WuFiQcx2CgaEab/wU7JbMhSUbqxzIB6qog+cGoyyWx4SGblAOUH7xJ3I5AaCumFOEdkjnnOct2yFsEx0GUEbIWUP7jrSsWUhrhll+FSQdepjYfrFMvd3kBBJc6nfQ85muJrgFafAzbS3Op8Qvd5Y8RMljz/n71wO80haaFFXGJhOd9h4FFFFamAlIaU000FBRSUUAJRRRWYwooooAKKKKACiiiqAKepI1FMpaAJ1M7c91Ox9P5NNKT8PyO/96iqXPPxa+fP58/egCOip9/xfk39/zpmUcj7Np+e36U7iGUU5rZG4Pry+dMpgKKscLxi4mhOYdG+hqtoqJQjJWki4zlF3TNXw7tIqNmgqYIIMwQdxI1FdOI4qLlw3FYKxj4DBECJkc/OsWaVVJ2BPpWEunVrJ25N49VJO7VzZ3OJXCCO8aDvBgn1I1NJ/qbXdFDb/ANyDBgbzo2aZjyrJKSN3j3JPyFSrfbcE/wBTHT2H+alUZLm5f6iL4t8C+XFPlAbKVG2dVcDyXMCfYVzYnEM+rNpESYEj7qqNAPIe9U74k/eLHqdvYfz0qBrjHUkmqVOXLJfULhF1xDiQuBVgKFnSZJPr9KrHvjlXNRWmjkzdV2ssDmcmmUsUCrSMm77gBTwKAKWrSIbCkmg0lAgJptLSUFBRRRSASiiioGFFFFABRRRQAUUUVQBRRRQAtFFFABUneHnr66/nvRRTEOVx5j0P8/Wnd5+MH+pf7GiigBwUnkh9iKO6P3U/OlooAYTH2kHov/zSOw5sx/IfWiikAzPGwA/M/nTGJOpM0UUhjYoiiigBYpQKKKYhQKcBSUVQDqQ0UUEjTSGiigpCUUUUmMSiiikB/9k=")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-white  text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Special Item for You.This is amazing and tasty biriyani</p>
                            <button className="btn btn-success">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto p-20 bg-white'>
                <h2 className='text-2xl text-red-500 font-bold'>Subscribe Now!!</h2>
                <h1 className='text-4xl mt-5 text-green-400'>Receive food from me in everyday.Have a nice day.</h1>
                <input type="email" placeholder="Type your email" className="input input-bordered mt-8 input-primary w-full max-w-xs" />
                <button className='btn btn-warning ml-3'>Subscribe</button>
            </div>

        </div>
    );
};

export default Home;
