import React from "react";

function Translations() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Gherkin Termini</h2>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-sm font-medium">English</th>
              <th scope="col" className="px-6 py-3 text-sm font-medium">Latvian</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">Feature</th>
              <td className="px-6 py-4">Funkcionalitāte</td>
            </tr>
            <tr className="even:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">Background</th>
              <td className="px-6 py-4">Konteksts</td>
            </tr>
            <tr className="even:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">Rule</th>
              <td className="px-6 py-4">Rule</td>
            </tr>
            <tr className="even:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">Scenario</th>
              <td className="px-6 py-4">Piemērs</td>
            </tr>
            <tr className="even:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">Scenario Outline</th>
              <td className="px-6 py-4">Scenārijs pēc parauga</td>
            </tr>
            <tr className="even:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">Examples</th>
              <td className="px-6 py-4">Piemēri</td>
            </tr>
            <tr className="even:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">Given</th>
              <td className="px-6 py-4">Kad</td>
            </tr>
            <tr className="even:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">When</th>
              <td className="px-6 py-4">Ja</td>
            </tr>
            <tr className="even:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">Then</th>
              <td className="px-6 py-4">Tad</td>
            </tr>
            <tr className="even:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">And</th>
              <td className="px-6 py-4">Un</td>
            </tr>
            <tr className="even:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">But</th>
              <td className="px-6 py-4">Bet</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Translations;
