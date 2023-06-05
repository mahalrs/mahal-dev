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
          {`Rajwinder Mahal is a skilled machine learning engineer specializing in machine learning and generative AI as an MS in Computer Science candidate at Columbia University. He holds a master's degree in Innovation and Entrepreneurship and a bachelor's degree in Computer Science from the University of California, Irvine.`}
        </p>
        <p>
          {`Rajwinder has experience in building scalable machine learning systems and has worked on projects in natural language processing, computer vision, generative AI, and recommender systems. He has worked with a variety of machine learning frameworks, including TensorFlow, PyTorch, and Scikit-learn. He also has experience working with cloud computing platforms, including Google Cloud Platform and Amazon Web Services.`}
        </p>
        <p>
          {`Rajwinder is deeply interested in the application of machine learning and state-of-the-art language models to solve real-world problems and making information more accessible and understandable. He is currently working on a generative AI experiment to transform the way people access news and make decisions while putting user privacy, trust, and preferences at the forefront.`}
        </p>
        <p>
          Rajwinder also has a strong passion for open-source software and has contributed to several open-source projects, including <a className='rsm-link' href='https://github.com/kubernetes/minikube' target='_blank' rel='noopener noreferrer'>minikube</a>, <a className='rsm-link' href='https://github.com/Azure/orkestra' target='_blank' rel='noopener noreferrer'>Azure Orkestra</a>, and <a className='rsm-link' href='https://github.com/hashicorp/vault' target='_blank' rel='noopener noreferrer'>HashiCorp Vault</a>. He loves to use open-source tools and is proficient in PyTorch, PyTorch Lightning, HuggingFace Transformers, Kubernetes, Docker, VS Code, Git, and Linux.
        </p>
        <p>
          {`Rajwinder can be reached at hello [at] mahal [dot] dev.`}
        </p>
      </main>
    </div>
  )
}
