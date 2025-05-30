import BaseModel from "#models/base";
import { DataTypes } from "sequelize";

class LoanApplication extends BaseModel {}

LoanApplication.initialize({
  otp: {
    type: DataTypes.INTEGER,
    defaultValue: 123456,
  },
  otpVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  loanAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  weeklyPayment: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  termYears: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.ENUM("Mrs", "Mr", "Miss", "Ms"),
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  maritalStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  noOfDependents: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  drivingLicenceType: {
    type: DataTypes.ENUM(
      "Restricted",
      "Full Licence",
      "Learner",
      "No Licence",
      "International",
      "Other",
    ),
    allowNull: false,
  },
  countryCode: {
    type: DataTypes.STRING,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  preferredContact: {
    type: DataTypes.ENUM(
      "Phone",
      "SMS",
      "Email",
      "Facebook Messenger",
      "WhatsApp",
      "Signal",
    ),
    allowNull: false,
  },
  streetAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  addressLine2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postalCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  propertyStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timeAtPropertyYears: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  timeAtPropertyMonths: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  monthlyCost: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  region: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  residentialStatus: {
    type: DataTypes.ENUM(
      "NZ Citizen",
      "NZ Resident",
      "Non NZ Resident",
      "Work Visa",
    ),
    allowNull: false,
  },
  employmentStatus: {
    type: DataTypes.ENUM(
      "Employed Full-Time",
      "Employed Part-Time",
      "Contractor",
      "Self Employed",
      "Unemployed",
      "Disabled",
      "Temporary",
      "Retired",
      "WINZ",
      "ACC",
      "WINZ & ACC",
      "Studylink",
    ),
    allowNull: false,
  },
  jobTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timeAtEmployerYears: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  timeAtEmployerMonths: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("Pending", "Eligible", "Not Eligible", "Completed"),
    defaultValue: "Pending",
  },
  disapprovalReason: {
    type: DataTypes.TEXT,
  },
});

export default LoanApplication;
