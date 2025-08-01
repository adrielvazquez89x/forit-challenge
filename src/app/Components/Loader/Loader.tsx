// src/app/Components/Loader/Loader.tsx
export default function Loader() {
    return (
        <div className="flex items-center justify-center w-full py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500" />
        </div>
    );
}
