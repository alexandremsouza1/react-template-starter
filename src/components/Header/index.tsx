import { MenuIcon, SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline';
import i18next from 'i18next';

export const Header = () => {

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement> ) => {
    event.preventDefault();
    const lng = event.target.value;
    console.log('changeLanguage', lng);
    i18next.changeLanguage(lng);
  };


  return (
    <header className="relative bg-white">
      <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        Get free delivery on orders over $100
      </p>

      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">
            <button type="button" className="rounded-md bg-white p-2 text-gray-400 lg:hidden">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                  Sign in
                </a>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                  Create account
                </a>
              </div>

              <div className="hidden lg:ml-8 lg:flex">
               <select className="flex items-center text-gray-700 hover:text-gray-800" onChange={ (e)=> changeLanguage(e) }>
                  <option value="en">English</option>
                  <option value="fr">French</option>
                </select>
              </div>

              {/* Search */}
              <div className="flex lg:ml-6">
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <SearchIcon className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>

              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <a href="#" className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
