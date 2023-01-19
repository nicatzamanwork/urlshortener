import React, { useEffect, useRef, useState,SyntheticEvent } from 'react'
import { BaseModel } from '../models/BaseModel'
import { UrlService } from '../services/UrlService'
import "../App.css"
function ShortUrl() {
  const [data,setData]=useState<BaseModel[]>([])
  const [url,setUrl]=useState("")
  // console.log(data)

  const handleSubmit=(e: SyntheticEvent)=>{
    e.preventDefault()
    // console.log(url)
    let urlService=new UrlService()
    urlService.getİnfo(url)
    .then(res=>{
      // console.log(data)
      // console.log(res)
      setData([...data,{
        original_link: res.result.original_link,
        full_short_link: res.result.full_short_link
      }])
    })
  }

  const copyClipboard=(url:string)=>{
    navigator.clipboard.writeText(url)
  }
  return (
    <div className='container'>
        <div className='shortner-container'>
            <h1>URL Shortner</h1>
            <form onSubmit={handleSubmit}>
              <div className='urlInput' onChange={(e)=>setUrl(e.target.value)}>
                <input type="text" placeholder='Shorten a link here...' />
              </div>
              <div className='urlBtn'>
                <button>Shorten it</button>
              </div>
            </form >
            <div className='shortner-link-groups'>
                {
                  data && (
                    data.map((link:any,i:number)=>(
                      <div className='shortner-link-group' key={i}>
                      <div className='original-link'>
                      {link.original_link}
                      </div>
                      <div className='short-link'>
                          <a href="">{link.full_short_link}</a>
                          <button onClick={()=>copyClipboard(link.full_short_link)} className='copyBtn'>Copy</button>
                      </div>
                      </div>

                    ))
                  )
                }
            </div>
        </div>
    </div>
  )
}

export default ShortUrl