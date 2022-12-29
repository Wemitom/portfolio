import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function Modal({
  open,
  setOpen,
  title,
  description,
  stack,
  gitURL,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  title: string;
  description: string;
  stack: string;
  gitURL: string;
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-primary text-left shadow-xl transition-all dark:bg-darkPrimary sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-primary px-4 pt-5 pb-4 dark:bg-darkPrimary sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-left sm:mt-0 sm:ml-4">
                      <Dialog.Title
                        as="h3"
                        className="mb-3 text-3xl font-bold leading-6 text-secondary dark:text-darkSecondary"
                      >
                        {title}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-md mb-3 text-secondary/70 dark:text-darkSecondary/70">
                          {description}
                        </p>
                        <p className="mb-3">Использованный стек: {stack}</p>
                        <p>
                          Ссылка на репозиторий:{' '}
                          <a
                            href={gitURL}
                            target="_blank"
                            className="text-accent"
                          >
                            {gitURL}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-center py-3">
                  <button
                    type="button"
                    className="w-5/6 rounded-md border border-transparent bg-accent px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/70 focus:ring-offset-2 sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Закрыть
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
