import meta from './page.metadata.json'

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <div className='flex justify-center px-6 sm:px-8 pt-10 pb-20'>
      <main className='max-w-screen-md prose-sm sm:prose-base dark:prose-invert prose-a:no-underline prose-h1:font-light prose-h1:text-4xl sm:prose-h1:text-6xl'>
        <div className='text-4xl sm:text-6xl mb-[0.25em]'>Hi &#128075;</div>
        <h1>{`I'm Rajwinder.`}</h1>
        <p>
          {`I am a MS candidate in Computer Science at Columbia University where I'm specializing in machine learning. Before coming to Columbia, I completed a master's degree in Innovation and Entrepreneurship and a bachelor's degree in Computer Science at the University of California, Irvine.`}
        </p>
        <p>
          {`Throughout my academic career, I have developed a strong foundation in computer science and software engineering principles. I have completed coursework in machine learning, distributed systems, cloud computing, programming languages, and software design. Additionally, I have experience working with cloud computing platforms, including Google Cloud Platform and Amazon Web Services.`}
        </p>
        <p>
          {`I am deeply interested in the application of cutting-edge machine learning techniques to solve practical problems. My passion for natural language processing drives my interest in making information more accessible and easier to understand. Additionally, I am intrigued by the potential of cloud computing to support large-scale projects and I enjoy the process of designing and building software systems.`}
        </p>
        <p>
          Outside of school, I am enthusiastic about using open-source tools. In particular, I love VS Code, Go, Git, Docker, and Linux! In the past, I have contributed to <a className='rsm-link' href='https://github.com/kubernetes/minikube' target='_blank' rel='noopener noreferrer'>minikube</a>, <a className='rsm-link' href='https://github.com/Azure/orkestra' target='_blank' rel='noopener noreferrer'>Azure Orkestra</a>, and <a className='rsm-link' href='https://github.com/hashicorp/vault' target='_blank' rel='noopener noreferrer'>HashiCorp Vault</a>.
        </p>
        <p>
          {`I can be reached at hello [at] mahal [dot] dev.`}
        </p>
      </main>
    </div>
  )
}
