export default function Home() {
    let width = 5000;

    return ( width < 500 ?
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1  className="text-blue-500">News Page</h1>

        </main>
        :
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1  className="text-red-500">Width is not 500</h1>

        </main>
    )
}
