interface DocumentIdPageProps {
  params: Promise<{documentId: string} >
}

const DocumentIdPage = async({params}:DocumentIdPageProps) => {

  const awaitedParams = await params
  const {documentId} = awaitedParams;
  return (
    <div>
      Document ID = {documentId}
    </div>
  )
}

export default DocumentIdPage;