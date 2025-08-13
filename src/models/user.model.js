import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define(
    "users",
    {
        id: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [4, 191],
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        lastLogin: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        isVerified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        resetPasswordToken: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        resetPasswordExpiresAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        verificationToken: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        verificationTokenExpiresAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        timestamps: true,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
    {
        freezeTableName: true,
    }
);

export default User;
