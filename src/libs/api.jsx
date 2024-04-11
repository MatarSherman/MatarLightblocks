const GREENHOUSE_API_KEY = "ad457daa1d77ba565cf7c757f9426215-8";
const GREENHOUSE_API_URL =
  "https://boards-api.greenhouse.io/v1/boards/lightblocks";

const nextOptions = { revalidate: 60 * 5 }; // Revalidate every 5 min

// Learn more -> https://developers.greenhouse.io/job-board.html#list-departments
export async function getDepartments() {
  try {
    const response = await fetch(`${GREENHOUSE_API_URL}/departments`, {
      next: nextOptions,
      headers: {
        Authorization: `Basic ${btoa(GREENHOUSE_API_KEY)}`,
      },
    });

    if (!response.ok) {
      console.log("ERROR :: Failed to fetch departments");
      return [];
    }

    const data = await response.json();
    return data?.departments;
  } catch (error) {
    console.log("ERROR :: Failed to fetch departments");
    return [];
  }
}

// Learn more -> https://developers.greenhouse.io/job-board.html#list-jobs
export async function getJobs() {
  try {
    const response = await fetch(`${GREENHOUSE_API_URL}/jobs`, {
      next: nextOptions,
      headers: {
        Authorization: `Basic ${btoa(GREENHOUSE_API_KEY)}`,
      },
    });

    if (!response.ok) {
      console.log("ERROR :: Failed to fetch jobs");
      return [];
    }

    const data = await response.json();
    return data?.jobs;
  } catch (error) {
    console.log("ERROR :: Failed to fetch jobs");
    return [];
  }
}

// Learn more -> https://developers.greenhouse.io/job-board.html#retrieve-a-job
export async function getJobDetails(jobId) {
  try {
    const response = await fetch(`${GREENHOUSE_API_URL}/jobs/${jobId}`, {
      next: nextOptions,
      headers: {
        Authorization: `Basic ${btoa(GREENHOUSE_API_KEY)}`,
      },
    });

    if (!response.ok) {
      console.log("ERROR :: Failed to fetch job details");
      return [];
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("ERROR :: Failed to fetch job details");
    return [];
  }
}
