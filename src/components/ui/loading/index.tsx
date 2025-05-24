import Image from "next/image"

export const PageLoading = () => {
    return (<>
        <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image src="/logo.svg" width={250} height={100} alt="logo" />
        </div>
    </>)
}