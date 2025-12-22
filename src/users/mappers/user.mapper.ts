
import { User } from '../entities/user.entity/user.entity';

export class UserMapper {
    static toEntity(id: number, dto: any): User {
        return new User(id, dto.name, dto.email, dto.password);
    }

    static toResponseDto(user: User) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
        };
    }
}