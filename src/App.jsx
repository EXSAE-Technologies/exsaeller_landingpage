import logo from './assets/logo.png';
import WindowsDownloadComponent from './windows_download_component';
import AndroidDownloadComponent from './android_download_component';

const App = () => {
  return (
    <div className="bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center text-xl font-bold text-gray-800">
              <img src={logo} alt='Logo' className="h-8 w-auto" />
              <span className="ml-2">Exsaeller POS</span>
            </div>
            <div className="flex items-center">
              <a href="mailto:exsaetech@gmail.com" className="text-gray-600 hover:text-gray-800">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
            The Point of Sale That Works For You, Online and Offline.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Manage your inventory, track sales, and empower your employees with Exsaeller.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <WindowsDownloadComponent />
            <AndroidDownloadComponent />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-gray-800">Key Features</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Inventory Management</h3>
              <p className="mt-2 text-gray-600">
                Keep track of your stock levels in real-time. Add, edit, and manage your
                inventory with ease.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Sales Tracking</h3>
              <p className="mt-2 text-gray-600">
                Monitor your sales and get detailed reports. Understand your business
                performance at a glance.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Employee Management</h3>
              <p className="mt-2 text-gray-600">
                Assign employees to outlets and manage their access. Streamline your sales
                process.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Offline First</h3>
              <p className="mt-2 text-gray-600">
                Never miss a sale. Our POS works seamlessly offline, syncing your data when
                you're back online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-gray-800">How It Works</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-800">Register</h3>
              <p className="mt-2 text-gray-600">Create your account and register your store.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-800">Setup</h3>
              <p className="mt-2 text-gray-600">Add your inventory, outlets, and employees.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800">Sell</h3>
              <p className="mt-2 text-gray-600">
                Start selling with our intuitive point of sale interface.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-800">Manage</h3>
              <p className="mt-2 text-gray-600">
                Track your sales and manage your business from anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Ready to take control of your business?</h2>
          <p className="mt-4 text-lg text-gray-600">Download Exsaeller today!</p>
          <div className="mt-8 flex justify-center space-x-4">
            <WindowsDownloadComponent />
            <AndroidDownloadComponent />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">
            &copy; 2025 EXSAE Technologies. All rights reserved.
          </p>
          <p className="mt-2 text-gray-600">
            Contact us at <a href="mailto:exsaetech@gmail.com" className="text-indigo-600">exsaetech@gmail.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;