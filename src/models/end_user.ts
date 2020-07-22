import { Model, DataTypes, Sequelize } from 'sequelize';

interface EndUserAttributes {
    id: number;
    name: string;
    age: number | null;
}

class EndUser extends Model<EndUserAttributes> implements EndUserAttributes {

    public id!: number;
    public name!: string;
    public age!: number | null;

    public static setup(sequelize: Sequelize): Model {
        return EndUser.init({
            id: {
                type: DataTypes.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            age: {
                type: DataTypes.SMALLINT,
                allowNull: true
            }
        }, {
            tableName: 'Sequelize',
            sequelize: sequelize
        });
    }
}

export default EndUser;