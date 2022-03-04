export default function ContactForm(){
  return(

<div className="">
      
  <form className='h-56 grid grid-cols-1 gap-4 content-center'
    action="https://formspree.io/f/xrgjpkwe"
    method="POST">
  

  <label>
      <input type="forname" name="forname" placeholder="votre prénom" className="bg-inherit text-center font-sans"/>
    </label>

    <label>
      <input type="tel" name="tel" placeholder="06.12.34.56.78" className="bg-inherit text-center font-sans"/>
    </label>

    <label>
      <input type="email" name="_replyto" placeholder="votre email" className="bg-inherit text-center font-sans"/>
    </label>
    <label>
      
   
      <textarea name="message" placeholder="votre message" className="bg-inherit text-center font-sans"></textarea>
    </label>
    <div className="flex justify-center">
      <button type="submit" className='bg-green-500 p-3 m-2 rounded-full hover:shadow-md border-2 border-grey-300'>
      <p>Envoyer</p>
      </button>
    </div> 
  </form>
</div>
  )
}

  
