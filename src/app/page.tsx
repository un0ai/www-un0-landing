'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [activeItem, setActiveItem] = useState('home')

  return (
    <main className="min-h-screen">
      {/* Banner Image */}
      <div className="relative w-full h-[230px] mb-4">
        <Image
          src="/imgs/banner2.png"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
      </div>

      {/* Navigation */}
      <div className="px-4 -mt-16 relative z-10">
        <nav className="max-w-[420px] mx-auto">
          <div className="bg-[#111111] border border-[#222222] rounded-full px-2 py-1.5 flex justify-between items-center shadow-lg backdrop-blur-sm">
            <Link 
              href="#home" 
              onClick={() => setActiveItem('home')}
              className={`nav-item ${activeItem === 'home' ? 'active' : 'text-[#888888]'}`}
            >
              Home
            </Link>
            <Link 
              href="#about" 
              onClick={() => setActiveItem('about')}
              className={`nav-item ${activeItem === 'about' ? 'active' : 'text-[#888888]'}`}
            >
              About
            </Link>
            <Link 
              href="#tools" 
              onClick={() => setActiveItem('tools')}
              className={`nav-item ${activeItem === 'tools' ? 'active' : 'text-[#888888]'}`}
            >
              Tools
            </Link>
            <Link 
              href="#contact" 
              onClick={() => setActiveItem('contact')}
              className={`nav-item ${activeItem === 'contact' ? 'active' : 'text-[#888888]'}`}
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto mt-8">
          {/* Home Section */}
          {activeItem === 'home' && (
            <div className="bg-[#111111]/30 border border-[#333333]/30 rounded-2xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#1a1a1a] rounded-lg p-6 flex flex-col items-left text-left">
                  <h2 className="text-gray-400 mb-2"> agent@playground~$ whoami</h2>
                  <div className="mb-4">
                    <h3 className="text-gray-400"> </h3>
                    <p className="text-4xl font-bold text-white">un0.ai</p>
                  </div>
                  <div className="mt-8">
                    <p className="text-white mb-4">Leveraging MLOps to integrate data pipelines, model training, deployments and observability to ensure continuous integration and seamless updates in a scalable and  secure manner.</p>

                  </div>
                </div>

                <div className="bg-[#1a1a1a] rounded-lg p-6">
                  <p className="text-gray-400 mb-1 text-right">[ tool studio | dashboard ]</p>
                  <div className="relative w-full h-[200px] mb-4">
                    <Image
                      src="/imgs/dashboard.png"
                      alt="Dashboard Preview"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="rounded-lg"
                    />
                  </div>

                  <div className="flex justify-center">
                    <a 
                      href="https://un0.ai/dashboard" 
                      className="block w-full border border-[#4CAF50] text-[#4CAF50] px-4 py-2 rounded-full hover:bg-[#4CAF50] hover:text-white transition-colors text-center"
                    >
                      Access the platform
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* About Section */}
          {activeItem === 'about' && (
            <div className="bg-[#111111]/30 border border-[#333333]/30 rounded-2xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                <div className="bg-[#1a1a1a] rounded-lg p-6 flex flex-col justify-center h-full">
                  <div>
                    <h2 className="text-white text-xl mb-4">Platform Overview</h2>
                    <p className="text-white mb-4">un0.ai is a platform designed to create and manage ML lifecycles.
                      <br/>It enables the deployment and orchestration of MLOps pipelines with real-time observability of workflows.
                    </p>
                    <h3 className="text-gray-400 text-lg mb-3">AI Playground Features</h3>
                    <ul className="space-y-2 text-white">
                      <li className="flex items-center">
                        <span className="mr-2">✅</span>
                        <span>CI/CD pipelines</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✅</span>
                        <span>Observability & Monitoring</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✅</span>
                        <span>Deployments / Orchestration</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✅</span>
                        <span>Telemetry</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-[#1a1a1a] rounded-lg p-6 flex flex-col h-full" role="region" aria-label="Platform Status">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-white text-xl">Platform Status</h2>
                    <p className="text-[#4CAF50] px-3 py-1 rounded-full bg-[#4CAF50]/10">Active</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Active Projects [PRD]</span>
                      <span className="text-white font-medium">3</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Active Projects [Staging]</span>
                      <span className="text-white font-medium">14</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Deployed Pipelines (Total)</span>
                      <span className="text-white font-medium">32</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">AI Workers (Total)</span>
                      <span className="text-white font-medium">32</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tools Section */}
          {activeItem === 'tools' && (
            <div className="bg-[#111111]/30 border border-[#333333]/30 rounded-2xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Card 1 */}
                <div className="bg-[#1a1a1a] rounded-lg p-6 flex flex-col">
                  <div className="flex-grow">
                    <h2 className="text-gray-400 mb-2">ML & AI Pipelines</h2>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-gray-400">Status:</span>
                      <span className="text-[#4CAF50] px-3 py-1 rounded-full bg-[#4CAF50]/10">Active</span>
                    </div>
                    <div className="mt-4">
                      <p className="text-white mb-4">Workflow orchestration and management. </p>
                      <h3 className="text-gray-400">Framerowks</h3>
                      <p className="text-white mb-4">langchain · langgraph · langflow </p>
                    </div>
                  </div>
                  <a 
                    href="https://un0.ai/dashboard/pipelines" 
                    className="w-full border border-[#4CAF50] text-[#4CAF50] px-4 py-2 rounded-full hover:bg-[#4CAF50] hover:text-white transition-colors text-center block"
                  >
                    Workflow Admin
                  </a>
                </div>

                {/* Card 2 */}
                <div className="bg-[#1a1a1a] rounded-lg p-6 flex flex-col">
                  <div className="flex-grow">
                    <h2 className="text-gray-400 mb-2">Integrations</h2>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-gray-400">Active:</span>
                      <span className="text-[#4CAF50] px-3 py-1 rounded-full bg-[#4CAF50]/10">8</span>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-gray-400">Services</h3>
                      <p className="text-white mb-4">flowise · vectorshift · voiceflow · n8n · make.com · zappier · obsidian vaults · standard notes</p>
                    </div>
                  </div>
                  <a 
                    href="https://un0.ai/dashboard/integrations" 
                    className="w-full border border-[#4CAF50] text-[#4CAF50] px-4 py-2 rounded-full hover:bg-[#4CAF50] hover:text-white transition-colors text-center block"
                  >
                    Manage Services
                  </a>
                </div>

                {/* Card 3 */}
                <div className="bg-[#1a1a1a] rounded-lg p-6 flex flex-col">
                  <div className="flex-grow">
                    <h2 className="text-gray-400 mb-2">Observability</h2>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-gray-400">Health:</span>
                      <span className="text-[#4CAF50] px-3 py-1 rounded-full bg-[#4CAF50]/10">100%</span>
                    </div>
                    <div className="mt-4">
                      <p className="text-white mb-4">Real-time performance monitoring and performance tracking.</p>
                      <h3 className="text-gray-400">Tools</h3>
                      <p className="text-white mb-4">langsmith · langfuse</p>
                    </div>
                  </div>
                  <a 
                    href="https://un0.ai/dashboard/monitoring" 
                    className="w-full border border-[#4CAF50] text-[#4CAF50] px-4 py-2 rounded-full hover:bg-[#4CAF50] hover:text-white transition-colors text-center block"
                  >
                    Monitoring
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Contact Section */}
          {activeItem === 'contact' && (
            <div className="bg-[#111111]/30 border border-[#333333]/30 rounded-2xl p-6 shadow-lg max-w-md mx-auto">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#1a1a1a] rounded-lg p-6">
                  <h2 className="text-gray-400 mb-2">Contact</h2>

                  <div className="mt-4">
                    <h3 className="text-gray-400">MLOps Playground</h3>
                    <p className="text-white mb-4">lab@un0.dev</p>
                    
                    <h3 className="text-gray-400">B2B Consultancy</h3>
                    <p className="text-white mb-4">business@un0.dev</p>
                    
                    <h3 className="text-gray-400">Other inquiries</h3>
                    <p className="text-white mb-4">mail@un0.dev</p>

                    <a 
                      href="mailto:help@un0.dev"
                      className="block w-full border border-[#4CAF50] text-[#4CAF50] px-4 py-2 rounded-full hover:bg-[#4CAF50] hover:text-white transition-colors text-center"
                    >
                      deployment issues?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
