import './Upload.scss';

function Upload() {

    return (<>
      <h1 className='upload__title'>Upload Video</h1>
  
      <div className='upload__header'>
          <h2 className='upload__subtitle'>VIDEO THUMBNAIL</h2>
          <img className='upload__image' src='../../src/assets/images/Upload-video-preview.jpg'></img>
      </div>
  
      <form className=''>
  
          <div>
          <label></label>
          <input
              className="upload__title"
              type="text"
              id="title-input"
              placeholder="Add a title to your video"
            ></input>
          </div>
  
          <div>
          <label></label>
          <textarea
                className="upload__text-area"
                placeholder="Add a description to your video"
                rows="4"
                required
          ></textarea>
          </div>
  
          <button className='upload__button'>PUBLISH</button>
  
      </form>
  
      <button className='upload__button--cancel'>CANCEL</button>
      </>
    );
  };



export default Upload;