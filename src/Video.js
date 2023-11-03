const Video = () => {
  return (
    <div className="video">
      <div class="container">
        <video class="vid-cot" controls loop muted poster="css/web Design.jpg">
          <source
            src="css/Ali Shaddad .. Trekni Bhali - video clip علي شداد - تركني بحالي.mp4"
            type="video/mp4"
          />
          <source
            src="css/Ali Shaddad .. Trekni Bhali - video clip علي شداد - تركني بحالي.mp4"
            type="video/ogg"
          />
          Your Browser Don't Support Vedio Tag
          <track
            src="my_Filyen.vtt"
            kind="subtitles"
            srclang="en"
            label="English"
          />
          <track
            src="my_Filyit.vtt"
            kind="subtitles"
            srclang="it"
            label="Italian"
          />
        </video>
      </div>
    </div>
  );
};

export default Video;
