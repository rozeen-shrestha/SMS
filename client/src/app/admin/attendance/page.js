'use client'
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function AttendancePage() {
  const [selectedClass, setSelectedClass] = useState('');
  const [students, setStudents] = useState([]);
  const [absentStudents, setAbsentStudents] = useState([]);
  const [leaveStudents, setLeaveStudents] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];
    setDate(currentDate);
  }, []);

  const handleClassChange = (e) => {
    const selectedClass = e.target.value;
    setSelectedClass(selectedClass);

    // Hardcoded students for different classes
    const classStudents = {
      class1: [
        { id: 1, name: 'Student A' },
        { id: 2, name: 'Student B' },
        { id: 3, name: 'Student C' },
      ],
      class2: [
        { id: 4, name: 'Student D' },
        { id: 5, name: 'Student E' },
        { id: 6, name: 'Student F' },
      ],
      class3: [
        { id: 7, name: 'Student G' },
        { id: 8, name: 'Student H' },
        { id: 9, name: 'Student I' },
      ],
    };

    setStudents(classStudents[selectedClass] || []);
    setAbsentStudents([]);
    setLeaveStudents([]);
  };

  const handleAbsentClick = (studentId) => {
    setAbsentStudents((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
    setLeaveStudents((prev) => prev.filter((id) => id !== studentId));
  };

  const handleLeaveClick = (studentId) => {
    setLeaveStudents((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
    setAbsentStudents((prev) => prev.filter((id) => id !== studentId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentsStatus = students.map((student) => ({
      id: student.id,
      name: student.name,
      status: absentStudents.includes(student.id)
        ? 'absent'
        : leaveStudents.includes(student.id)
        ? 'leave'
        : 'present',
    }));
    const data = {
      date,
      classname: selectedClass,
      students: studentsStatus,
    };
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="p-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Add Attendance</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="date">Date</Label>
            <Input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border rounded p-2"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="class">Select Class</Label>
            <select
              id="class"
              value={selectedClass}
              onChange={handleClassChange}
              className="border rounded p-2"
            >
              <option value="">Select a class</option>
              <option value="class1">Class 1</option>
              <option value="class2">Class 2</option>
              <option value="class3">Class 3</option>
            </select>
          </div>
          <div className="grid gap-2">
            <Label>Students</Label>
            <div className="overflow-y-auto max-h-96 border rounded p-2">
              {students.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-2 border-b">
                  <Label htmlFor={`student-${student.id}`} className="flex-1">
                    {student.name}
                  </Label>
                  <div className="flex space-x-2">
                    <Button
                      className={`ml-2 ${absentStudents.includes(student.id) ? 'bg-red-500' : 'bg-gray-300'} hover:bg-red-700`}
                      onClick={() => handleAbsentClick(student.id)}
                    >
                      Absent
                    </Button>
                    <Button
                      className={`ml-2 ${leaveStudents.includes(student.id) ? 'bg-yellow-500' : 'bg-gray-300'} hover:bg-yellow-700`}
                      onClick={() => handleLeaveClick(student.id)}
                    >
                      Leave
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleSubmit}>
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
