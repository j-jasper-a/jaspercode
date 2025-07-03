import { faker } from "@faker-js/faker";

faker.seed(42);

type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  currentJob: {
    id: string;
    title: string;
    department?: string;
    startDate: string;
  };
  company: {
    id: string;
    name: string;
    logo?: string;
    email: string;
    phone: string;
    address: string;
    website: string;
  };
  metadata: {
    createdAt: string;
    updatedAt?: string;
  };
};

function randomlyInclude<T>(value: T, probability?: number): T | undefined {
  return faker.datatype.boolean({ probability: probability || 0.5 })
    ? value
    : undefined;
}

function generateFakeEmployee(): Employee {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const companyName = faker.company.name();
  const companyDomain = faker.helpers
    .slugify(companyName)
    .replaceAll("-", "")
    .toLowerCase()
    .concat(faker.helpers.arrayElement([".com", ".net", ".org"]));

  return {
    id: faker.string.uuid(),
    firstName: firstName,
    lastName: lastName,
    email: faker.internet
      .email({
        firstName: firstName,
        lastName: lastName,
        provider: faker.helpers.arrayElement([
          "gmail.com",
          "yahoo.com",
          "hotmail.com",
        ]),
        allowSpecialCharacters: false,
      })
      .toLowerCase(),
    avatar: faker.datatype.boolean({ probability: 0.5 })
      ? faker.image.avatar()
      : undefined,
    currentJob: {
      id: faker.string.uuid(),
      title: faker.person.jobTitle(),
      department: randomlyInclude(faker.person.jobArea(), 0.5),
      startDate: faker.date.past({ years: 5 }).toISOString(),
    },
    company: {
      id: faker.string.uuid(),
      name: companyName,
      logo: randomlyInclude(
        faker.image.dataUri({
          type: "svg-uri",
          height: 512,
          width: 512,
          color: faker.color.human(),
        }),
        0.9,
      ),
      email: `info@${companyDomain}`,
      phone: faker.phone.number({ style: "international" }),
      address: faker.location.streetAddress({ useFullAddress: true }),
      website: `https://${companyDomain}`,
    },
    metadata: {
      createdAt: faker.date.past({ years: 5 }).toISOString(),
      updatedAt: randomlyInclude(
        faker.date.recent({ days: 7 }).toISOString(),
        0.9,
      ),
    },
  };
}

export async function fetchFakeEmployeeById(
  id: string,
): Promise<Employee | null> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const employee = generateFakeEmployee();

  employee.id = String(id);

  return employee;
}

export async function fetchAllFakeEmployees(
  limit?: number,
): Promise<Employee[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const employees = Array.from({ length: limit || 16 }, () =>
    generateFakeEmployee(),
  );

  return employees;
}

(async () => {
  console.log(await fetchFakeEmployeeById("1"));
})();

// (async () => {
//   console.log(await fetchAllFakeEmployees(2));
// })();
