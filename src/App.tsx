import './App.css'
import TimeDashboard from '@/components/TimerDashboard'

import Providers from './components/Providers'
import TaskModal from './components/TaskModal'
import ThemeToggle from './components/ui/themeButton'
import MusicPlayer from './components/MusicPlayer'

function App() {
    return (
        <section className="relative flex h-dvh flex-col">
            <Providers>
                <header className="flex w-full items-center justify-center gap-1 py-6 text-center">
                    <ThemeToggle />
                    <h1 className="font-EBGaramond text-4xl font-extrabold italic leading-7">
                        Pomodoro
                    </h1>
                </header>
                <main className="flex flex-1 items-start justify-center">
                    <section className="flex px-2">
                        <TimeDashboard />
                    </section>
                </main>
                <TaskModal />
                <MusicPlayer />
            </Providers>
        </section>
    )
}

export default App
