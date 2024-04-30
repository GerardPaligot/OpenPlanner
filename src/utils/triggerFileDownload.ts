export const triggerFileDownload = async (url: string, fileName?: string) => {
    const finalFileName = fileName || url.split('/').pop()
    const a = document.createElement('a')
    document.body.appendChild(a)
    const blob = await fetch(url).then((r) => r.blob())
    const objectUrl = window.URL.createObjectURL(blob)
    a.href = objectUrl
    a.download = finalFileName || 'file'
    a.click()
    window.URL.revokeObjectURL(objectUrl)
    document.body.removeChild(a)
}
