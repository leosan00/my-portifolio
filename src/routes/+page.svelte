<style lang="postcss">

    /* body {
        background: linear-gradient(45deg, #eee 25%, transparent 25%) 0 0,
          linear-gradient(-45deg, #eee 25%, transparent 25%) 0 0,
          linear-gradient(45deg, transparent 75%, #eee 75%) 0 0,
          linear-gradient(-45deg, transparent 75%, #eee 75%) 0 0;
        background-size: 40px 40px;
        animation: move 4s linear infinite;
      } */
    
      @keyframes move {
        from {
          background-position: 0 0;
        }
        to {
          background-position: 40px 40px;
        }
      }
    
        main {
          max-width: 800px;
          margin: 2rem auto;
          text-align: center;
        }
      
        h1 {
          font-size: 2rem;
          margin-bottom: 2rem;
        }
      
        .project {
          margin-bottom: 2rem;
        }
      
        .project img {
          width: 100%;
        }
      
        .project h2 {
          font-size: 1.5rem;
          margin-top: 1rem;
        }
      
        .project p {
          font-size: 1.25rem;
          margin-top: 0.5rem;
        }
      </style>
      
     <main>
            <h1>My Portfolio</h1>
          
            <div class="project">
              <img src="project1.jpg" alt="Project 1">
              <h2>Project 1</h2>
              <p>A brief description of project 1</p>
            </div>
          
            <div class="project">
              <img src="project2.jpg" alt="Project 2">
              <h2>Project 2</h2>
              <p>A brief description of project 2</p>
            </div>
          
            <div class="project">
              <img src="project3.jpg" alt="Project 3">
              <h2>Project 3</h2>
              <p>A brief description of project 3</p>
            </div>
          </main>
        