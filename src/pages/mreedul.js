export default function examplePage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Hello, I'm Mreedul!</h1>
          </div>
          <img
            className='pic'
            src='https://www.outsideonline.com/wp-content/uploads/2020/03/12/gem-lake-and-longs-peak-sunset_h.jpg'
            alt='rocky mountain'
          />
          <div>
            <p className="description">
            I am currently a first year student at the University of Colorado Boulder. 
            I am studying Computer Science and I am most interested in the field of Artificial 
            Intelligence. A little about myself is that I am from Colorado and I have lived in 
            Colorado my entire life. I enjoy going to the mountains, hiking, camping, and rafting 
            with my friends and family. Our favorite getaway is Rocky Mountain National park where 
            we usually hike Dream and Emerald lake. Outside of the outdoors I am a fan of both the 
            Broncos, Nuggets, and Avs. I am looking forward to everything that I’ll be able to 
            learn from Boulder and I am excited to meet new people along the way. 
            </p>
          </div>

          <a className='button' href='/'>
            <p> Back to Home Page</p>
          </a>
        </main>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .pic {
            height: 350px;
            width: 550px;
          }

          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            background-color: lightblue;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}