import './App.css'
import Main from './Components/main'
import data from './Components/data'
import MainNews from './Components/MainNews'
import Footer from './Components/Footer'
function App() {
const NewsEL = data.map(news=>{
return(
  <MainNews
key = {news.id}
image ={news.img}
heading = {news.heading}
news1 = {news.News1}
 />
)
})
  return (
   <div >
<Main img = {"images"} />
<h1 className='heading-news text-center font-bold text-7xl mt-[10px]'>Daily News</h1>
<hr></hr>
<div>
  {NewsEL}
</div>
<Footer />
    </div>
  )
}

export default App
