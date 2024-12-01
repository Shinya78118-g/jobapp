"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const JobPostForm: React.FC = () => {
  const [newJobTitle, setNewJobTitle] = useState<string>('');
  const [newJobCategory, setNewJobCategory] = useState<string>('');
  const [newJobSalary, setNewJobSalary] = useState<number | ''>('');
  const router = useRouter();

  const handleJobPost = () => {
    if (newJobTitle && newJobCategory && newJobSalary) {
      const newJob = {
        id: Date.now(),
        title: newJobTitle,
        category: newJobCategory,
        salary: Number(newJobSalary),
      };

      // 既存の求人データを取得し、新しい求人データを追加
      const existingJobs = JSON.parse(sessionStorage.getItem('jobs') || '[]');
      existingJobs.push(newJob);
      sessionStorage.setItem('jobs', JSON.stringify(existingJobs));

      setNewJobTitle('');
      setNewJobCategory('');
      setNewJobSalary('');
      router.push('/job-list'); // 投稿後に求人一覧ページへ戻る
    }
  };

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6 p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">求人投稿</h1>
        <button onClick={() => router.push('/job-list')} className="text-white">ホームに戻る</button>
      </header>

      <div className="mt-8 p-6 bg-white shadow-md rounded-md w-full max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-4">求人投稿</h2>
        <div className="grid gap-6">
          <label className="block">
            <span className="text-gray-700">カテゴリを選択:</span>
            <select
              value={newJobCategory}
              onChange={(e) => setNewJobCategory(e.target.value)}
              className="mt-2 block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">選択してください</option>
              {['エンジニア', 'デザイン', 'マーケティング', '営業', '財務・経理', 'カスタマーサポート', '事務', '医療・介護'].map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-gray-700">年収 (万円):</span>
            <input
              type="number"
              value={newJobSalary}
              onChange={(e) => setNewJobSalary(e.target.value ? parseInt(e.target.value) : '')}
              className="mt-2 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">求人タイトル:</span>
            <input
              type="text"
              value={newJobTitle}
              onChange={(e) => setNewJobTitle(e.target.value)}
              className="mt-2 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>

          <button
            onClick={handleJobPost}
            className="bg-blue-500 text-white px-6 py-3 rounded-md w-full"
          >
            投稿
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPostForm;
