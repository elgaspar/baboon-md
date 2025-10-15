import logo from '@assets/logo.png';

export default function MobileWarning() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-6 ">
            <img src={logo} alt="BaboonMD Logo" className="h-14 mb-4" />

            <p className="text-gray-600">
                The baboons need more jungle space!
                <br />
                Switch to a tablet, desktop, or try rotating your phone.
            </p>
        </div>
    );
}
