import React from 'react';

export const WelcomeBanner = () => <div className="flex items-center p-8 bg-gray-100 rounded">
    <div className="mx-auto text-center lg:text-left">
        <h2 className="text-2xl font-bold">
            Watches
        </h2>

        <p className="mt-4 text-sm text-gray-700 max-w-[45ch]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, cupiditate mollitia saepe
            vitae libero nobis.
        </p>

        <a
            href="/collections/watches"
            className="inline-block px-6 py-3 mt-6 text-sm text-white bg-black rounded"
        >
            View the Range
        </a>
    </div>
</div>;