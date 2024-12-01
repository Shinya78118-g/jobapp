"use client";
import React, { useState } from 'react';
import { Job } from './types/Job';

const jobCategories = [
  'エンジニア',
  'デザイン',
  'マーケティング',
  '営業',
  '財務・経理',
  'カスタマーサポート',
  '事務',
  '医療・介護',
];

export default function JobListPage() {
  const [jobs] = useState<Job[]>([
    { id: 1, title: '経験者歓迎！大手企業でのWebエンジニア募集', category: 'エンジニア', salary: 600 },
    { id: 2, title: '未経験OK！営業アシスタント急募', category: '営業', salary: 350 },
    { id: 3, title: 'グローバル企業でのマーケティングマネージャー', category: 'マーケティング', salary: 800 },
    { id: 4, title: 'UI/UXデザイナー募集！急成長中のスタートアップ', category: 'デザイン', salary: 550 },
    { id: 5, title: '大手製造業での生産管理スペシャリスト', category: '製造', salary: 650 },
    { id: 6, title: '急成長ベンチャーでの経理マネージャー募集', category: '財務・経理', salary: 700 },
    { id: 7, title: '大手IT企業での人事担当者募集', category: '人事', salary: 500 },
    { id: 8, title: '外資系企業でのカスタマーサポート担当募集', category: 'カスタマーサポート', salary: 400 },
    { id: 9, title: '看護師募集！大学病院での勤務', category: '医療・介護', salary: 550 },
    { id: 10, title: '一般事務スタッフ募集！週3日からOK', category: '事務', salary: 300 },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [minSalary, setMinSalary] = useState<number | ''>('');

  const filteredJobs = jobs.filter((job) => {
    return (
      (selectedCategory === '' || job.category === selectedCategory) &&
      (minSalary === '' || job.salary >= minSalary)
    );
  });

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6 p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">求人検索アプリ</h1>
        <nav>
          <a href="/job-list" className="mr-4 text-white">求人検索</a>
          <a href="/components/JobPostForm" className="text-white">求人投稿</a>
        </nav>
      </header>

      <div className="grid grid-cols-4 gap-4">
        <aside className="col-span-1 p-4 border-r border-gray-300">
          <h2 className="font-bold mb-4">求人カテゴリ</h2>
          <ul>
            {jobCategories.map((category) => (
              <li key={category} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                    className="mr-2"
                  />
                  {category}
                </label>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <label>
              <span className="font-bold">年収:</span>
              <select
                value={minSalary}
                onChange={(e) => setMinSalary(e.target.value ? parseInt(e.target.value) : '')}
                className="mt-2 block w-full border-gray-300 rounded-md"
              >
                <option value="">選択してください</option>
                <option value="300">300万円以上</option>
                <option value="400">400万円以上</option>
                <option value="500">500万円以上</option>
              </select>
            </label>
          </div>
        </aside>

        <main className="col-span-3 p-4">
          <h2 className="font-bold text-xl mb-4">求人一覧</h2>
          <p className="mb-2">該当件数: {filteredJobs.length}件</p>
          <ul>
            {filteredJobs.map((job) => (
              <li key={job.id} className="p-4 border-b border-gray-300 mb-2 flex justify-between">
                <div>
                  <h3 className="font-bold">{job.title}</h3>
                  <p>カテゴリ: {job.category}</p>
                </div>
                <p className="text-right">年収: {job.salary}万円</p>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-4">
            <button className="px-4 py-2 mx-1 border rounded">1</button>
            <button className="px-4 py-2 mx-1 border rounded">2</button>
            <button className="px-4 py-2 mx-1 border rounded">3</button>
            <button className="px-4 py-2 mx-1 border rounded">4</button>
            <button className="px-4 py-2 mx-1 border rounded">5</button>
          </div>
        </main>
      </div>
    </div>
  );
}
