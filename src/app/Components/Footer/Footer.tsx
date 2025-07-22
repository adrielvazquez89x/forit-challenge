export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-gray-100 to-gray-200 py-6 mt-16 shadow-inner">
            <div className="max-w-md mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-gray-700 text-sm">
                <span className="flex items-center gap-1">
                    Desarrollado por 
                    <a
                        href="https://adrielvazquez.com.ar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-semibold ml-1"
                    >
                        Adriel Vazquez
                    </a>
                </span>
                <span className="hidden sm:inline-block">|</span>
                <span>© {new Date().getFullYear()}</span>
            </div>
        </footer>
    );
}
