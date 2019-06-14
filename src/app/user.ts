export class User {
    constructor(public name: string, public avatar: string) {
    }

    editUser(newName: string, newAvatar: string) {
        if(newName) {
            this.name = newName;
        }
        if(newAvatar) {
            this.avatar = newAvatar;
        }
    }
}
